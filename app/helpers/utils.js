const gm = require('gm').subClass({ imageMagick: true });
const request = require('request');
const urlExists = require('url-exists');
const path = require('path');

let Utils = {
	asyncForEach: async (array, callback) => {
		for (let index = 0; index < array.length; index++) {
			await callback(array[index], index, array);
		}
	},
	inArray: (array, ch) => {
		obj = _.find(array, (obj) => (obj == ch.toString()))
		if (obj != undefined) {
			return true;
		} else {
			return false;
		}
	},
	inArrayObject: (rules, findBy) => {
		const _rules = _.findWhere(rules, findBy);
		if (!_rules) {
			return false;
		} else {
			return true;
		}
	},
	objectKeyByValue: (obj, val) => {
		return Object.entries(obj).find(i => i[1] === val);
	},
	// this is for only menu access permission wise
	menuAccess: (obj, val) => {
		const splitted = val.split("/");
		if (splitted.length == 5) {
			start = val.lastIndexOf('/');
			val = val.substring(0, start) + '/:id';
		}
		return Object.entries(obj).find(i => i[1] === val);
	},
	// Underscore replace by space //  
	humanize: (str) => {
		const frags = str.split('_');
		for (i = 0; i < frags.length; i++) {
			frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
		}
		return frags.join(' ');
	},
	existsSync: (filePath) => {
		const fullpath = upload_directory + filePath;
		try {
			fs.statSync(fullpath);
		} catch (err) {
			if (err.code == 'ENOENT') return false;
		}
		return true;
	},
	toThousands: n => {
		return n.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	formatDollar: num => {
		num = Number(num);
		const p = num.toFixed(2).split(".");
		return "$" + p[0].split("").reverse().reduce((acc, num, i) => {
			return num == "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
		}, "") + "." + p[1];
	},
	documentIcon:(fileName) => {
		let getExtension = path.extname(fileName);
		let displayIcon = 'fa-file-pdf';
		if(getExtension.toLowerCase() == '.pdf'){
			displayIcon = 'fa-file-pdf';
		}
		if(getExtension.toLowerCase() == '.xls' || getExtension.toLowerCase() == '.xlsx'){
			displayIcon = 'fa-file-excel';
		}
		if(getExtension.toLowerCase() == '.pptx'){
			displayIcon = 'fa-file-powerpoint';
		}
		if(getExtension.toLowerCase() == '.doc' || getExtension.toLowerCase() == '.docx'){
			displayIcon = 'fa-file-word';
		}
		return displayIcon;
	},
	clone: copyobj => {
		try {
			let tmpobj = JSON.stringify(copyobj);
			return JSON.parse(tmpobj);
		} catch (e) {
			return {};
		}
	},
	valEmail: email => {
		let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	},
	safeparse: (jsonString, def) => {
		return Utils.safeParseJson(jsonString, def);
	},
	safeParseJson: (jsonString, def) => {
		try {
			let o = JSON.parse(jsonString);
			// Handle non-exception-throwing cases:
			// Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
			// but... JSON.parse(null) returns null, and typeof null === "object",
			// so we must check for that, too. Thankfully, null is falsey, so this suffices:
			if (o) {
				return o;
			}
		} catch (e) {
			//winston.error(e.message);
		}
		return def;
	},
	evalJSON: jsonString => {
		try {
			//let o = JSON.parse(jsonString);
			let o = JSON.parse(JSON.stringify(jsonString));
			// Handle non-exception-throwing cases:
			// Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
			// but... JSON.parse(null) returns null, and typeof null === "object",
			// so we must check for that, too. Thankfully, null is falsey, so this suffices:
			if (o && typeof o === "object") {
				return o;
			}
		} catch (e) { }
		return false;
	},
	toObjectId: str => {
		if (typeof str === 'string') {
			return /^[a-f\d]{24}$/i.test(str);
		} else if (Array.isArray(str)) {
			return str.every(arrStr => /^[a-f\d]{24}$/i.test(arrStr));
		}
		return false;
	},
	orderNumber: () => {
		let now = Date.now().toString() // '1492341545873'
		// pad with extra random digit
		now += now + Math.floor(Math.random() * 10)
		// format
		return now.slice(7, 14)
	},
	isProductAttribute: (array, ch) => {
		obj = _.filter(array, (obj) => { return obj.attribute_id.toString() == ch.toString() })
		return obj;
	},
	awsThumbGenerate: (file_object, upload_folder) => {
		const location = file_object[0].location;
		const uploadImageArr = file_object[0].key.split("/");
		const image_name = uploadImageArr[1];
		const mime_type = file_object[0].mimetype;
		gm(request(location))
			.resize(150)
			.stream((err, stdout, stderr) => {
				const chunks = [];
				stdout.on('data', chunk => {
					chunks.push(chunk);
				});
				stdout.on('end', () => {
					const image = Buffer.concat(chunks);
					const s3_options = {
						Bucket: config.AWS_BUCKET,
						Key: upload_folder + "/thumb/" + image_name,
						Body: image,
						ACL: 'public-read',
						ContentType: mime_type,
						ContentLength: image.length
					}
					s3.upload(s3_options, (err, data) => {
						return true;
					})
				});

			});
		return true;
	},
	isLinkExist: url => {
		return urlExists(url, (err, exists) => (exists ? true : false));
	},
	ifBlankThenNA(value) {
		return (typeof value === 'string' && value) ? value : 'NA';
	},
	getCaseCount: (rules, findBy) => {
		const _rules = _.findWhere(rules, findBy);
		if (_rules) {
			return _rules.count;
		} else {
			return 0;
		}
	},
};

module.exports = Utils;
