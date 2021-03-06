define({ "api": [
  {
    "type": "get",
    "url": "/admin/cms/:id",
    "title": "CMS details",
    "version": "1.0.0",
    "group": "CMS",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5eec82de2efe3a09d93307d8\",\n        \"title\": \"test\",\n        \"slug\": \"abcd\",\n        \"content\": \"ddff\",\n        \"page_group\": \"front\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-06-19T09:18:22.566Z\",\n        \"__v\": 0\n    },\n    \"message\": \"CMS fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/cms.routes.js",
    "groupTitle": "CMS",
    "name": "GetAdminCmsId"
  },
  {
    "type": "get",
    "url": "/admin/cms/list",
    "title": "CMS list",
    "version": "1.0.0",
    "group": "CMS",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5ea98b6ac7d64cd82b03ae1a\",\n            \"title\": \"Terms And Conditions\",\n            \"slug\": \"terms-and-conditions\",\n            \"content\": \"<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\\r\\n\",\n            \"page_group\": \"Terms And Conditions\",\n            \"isDeleted\": false,\n            \"status\": \"Active\",\n            \"updatedAt\": \"2020-04-29T10:53:26.074Z\"\n        },\n        {\n            \"_id\": \"5ea98c2bc7d64cd82b03b278\",\n            \"title\": \"Privacy Policy\",\n            \"slug\": \"privacy-policy\",\n            \"content\": \"<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\\r\\n\",\n            \"page_group\": \"Privacy Policy\",\n            \"isDeleted\": false,\n            \"status\": \"Active\",\n            \"updatedAt\": \"2020-04-29T15:23:48.154Z\"\n        },\n        {\n            \"_id\": \"5ebab757c7d64cd82b515bec\",\n            \"title\": \"Cookie Policy\",\n            \"slug\": \"cookie-policy\",\n            \"content\": \"<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\\r\\n\",\n            \"page_group\": \"Cookie Policy\",\n            \"isDeleted\": false,\n            \"status\": \"Active\",\n            \"updatedAt\": \"2020-05-12T15:23:48.154Z\"\n        },\n        {\n            \"_id\": \"5eec82de2efe3a09d93307d8\",\n            \"title\": \"test\",\n            \"slug\": \"abcd\",\n            \"content\": \"ddff\",\n            \"page_group\": \"front\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-19T09:18:22.566Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"CMS fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/cms.routes.js",
    "groupTitle": "CMS",
    "name": "GetAdminCmsList"
  },
  {
    "type": "post",
    "url": "/admin/cms/add",
    "title": "CMS Add",
    "version": "1.0.0",
    "group": "CMS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "slug",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page_group",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"test\",\n        \"slug\": \"abcd\",\n        \"content\": \"ddff\",\n        \"page_group\": \"front\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5eec82de2efe3a09d93307d8\",\n        \"createdAt\": \"2020-06-19T09:18:22.566Z\",\n        \"__v\": 0\n    },\n    \"message\": \"CMS Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/cms.routes.js",
    "groupTitle": "CMS",
    "name": "PostAdminCmsAdd"
  },
  {
    "type": "post",
    "url": "/admin/cms/delete",
    "title": "CMS Delete",
    "version": "1.0.0",
    "group": "CMS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cms_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"test1\",\n        \"slug\": \"abcd\",\n        \"content\": \"ddff\",\n        \"page_group\": \"front\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5eec82de2efe3a09d93307d8\",\n        \"createdAt\": \"2020-06-19T09:18:22.566Z\",\n        \"__v\": 0\n    },\n    \"message\": \"CMS Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/cms.routes.js",
    "groupTitle": "CMS",
    "name": "PostAdminCmsDelete"
  },
  {
    "type": "put",
    "url": "/admin/cms/update",
    "title": "CMS Edit",
    "version": "1.0.0",
    "group": "CMS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cms_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "slug",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page_group",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"test1\",\n        \"slug\": \"abcd\",\n        \"content\": \"ddff\",\n        \"page_group\": \"front\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5eec82de2efe3a09d93307d8\",\n        \"createdAt\": \"2020-06-19T09:18:22.566Z\",\n        \"__v\": 0\n    },\n    \"message\": \"CMS Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/cms.routes.js",
    "groupTitle": "CMS",
    "name": "PutAdminCmsUpdate"
  },
  {
    "type": "get",
    "url": "/admin/homeowner-hub/:id",
    "title": "Homeowner Hub details",
    "version": "1.0.0",
    "group": "Homeowner_Hub",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5ee87abd9522430a55cdc82a\",\n        \"title\": \"eee\",\n        \"description\": \"rryyyy\",\n        \"image\": \"1592294077775_download.jpeg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-06-16T07:54:37.824Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Homeowner hub fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/home_owner_hub.routes.js",
    "groupTitle": "Homeowner_Hub",
    "name": "GetAdminHomeownerHubId"
  },
  {
    "type": "get",
    "url": "/admin/homeowner-hub/list",
    "title": "Homeowner Hub list",
    "version": "1.0.0",
    "group": "Homeowner_Hub",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5ee87abd9522430a55cdc82a\",\n            \"title\": \"eee\",\n            \"description\": \"rryyyy\",\n            \"image\": \"1592294077775_download.jpeg\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-16T07:54:37.824Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Homeowner hub fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/home_owner_hub.routes.js",
    "groupTitle": "Homeowner_Hub",
    "name": "GetAdminHomeownerHubList"
  },
  {
    "type": "post",
    "url": "/admin/homeowner-hub/add",
    "title": "Homeowner Hub Add",
    "version": "1.0.0",
    "group": "Homeowner_Hub",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"eee\",\n        \"description\": \"rryyyy\",\n        \"image\": \"1592294077775_download.jpeg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5ee87abd9522430a55cdc82a\",\n        \"createdAt\": \"2020-06-16T07:54:37.824Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Homeowner hub Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/home_owner_hub.routes.js",
    "groupTitle": "Homeowner_Hub",
    "name": "PostAdminHomeownerHubAdd"
  },
  {
    "type": "post",
    "url": "/admin/homeowner-hub/delete",
    "title": "Homeowner Hub Delete",
    "version": "1.0.0",
    "group": "Homeowner_Hub",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "home_owner_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Test\",\n        \"description\": \"Test description\",\n        \"image\": \"1592294319619_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5ee87abd9522430a55cdc82a\",\n        \"createdAt\": \"2020-06-16T07:54:37.824Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Homeowner hub Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/home_owner_hub.routes.js",
    "groupTitle": "Homeowner_Hub",
    "name": "PostAdminHomeownerHubDelete"
  },
  {
    "type": "post",
    "url": "/admin/homeowner-hub/multiple-delete",
    "title": "Homeowner Hub multiple delete",
    "version": "1.0.0",
    "group": "Homeowner_Hub",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "home_owner_id",
            "description": "<p>Id [5f186a9927355013142e3b14,5f186a9927355013142e3b13]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Test\",\n        \"description\": \"Test description\",\n        \"image\": \"1592294319619_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5ee87abd9522430a55cdc82a\",\n        \"createdAt\": \"2020-06-16T07:54:37.824Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Homeowner hub Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/home_owner_hub.routes.js",
    "groupTitle": "Homeowner_Hub",
    "name": "PostAdminHomeownerHubMultipleDelete"
  },
  {
    "type": "put",
    "url": "/admin/homeowner-hub/update",
    "title": "Homeowner Hub Edit",
    "version": "1.0.0",
    "group": "Homeowner_Hub",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "home_owner_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Test\",\n        \"description\": \"Test description\",\n        \"image\": \"1592294319619_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5ee87abd9522430a55cdc82a\",\n        \"createdAt\": \"2020-06-16T07:54:37.824Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Homeowner hub Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/home_owner_hub.routes.js",
    "groupTitle": "Homeowner_Hub",
    "name": "PutAdminHomeownerHubUpdate"
  },
  {
    "type": "get",
    "url": "/admin/homeowner-hub-article/:id",
    "title": "Homeowner Hub article details",
    "version": "1.0.0",
    "group": "Homeowner_Hub_article",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f215894de74170eca386a76\",\n        \"state_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"section\": \"Section Two\",\n        \"identity\": \"section_two\",\n        \"title\": \"tetetdddd\",\n        \"banner_image\": \"ddd\",\n        \"image_one\": \"\",\n        \"image_two\": \"\",\n        \"content_one\": \"fddddff\",\n        \"content_two\": \"\",\n        \"content_three\": \"\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-29T11:08:04.806Z\",\n        \"__v\": 0,\n        \"state\": {\n            \"_id\": \"5f214f8e76f1b0d911dadc9f\",\n            \"title\": \"abc\",\n            \"type\": \"processing\",\n            \"orderNumber\": 0,\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-07-29T10:29:34.018Z\",\n            \"__v\": 0\n        }\n    },\n    \"message\": \"State article fetched Successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/home_owner_hub_article.routes.js",
    "groupTitle": "Homeowner_Hub_article",
    "name": "GetAdminHomeownerHubArticleId"
  },
  {
    "type": "get",
    "url": "/admin/homeowner-hub-article/list-all",
    "title": "Homeowner Hub article list all",
    "version": "1.0.0",
    "group": "Homeowner_Hub_article",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f215894de74170eca386a76\",\n            \"section\": \"Section Two\"\n        }\n    ],\n    \"state\": {\n        \"_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"title\": \"abc\"\n    },\n    \"message\": \"State article section fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/home_owner_hub_article.routes.js",
    "groupTitle": "Homeowner_Hub_article",
    "name": "GetAdminHomeownerHubArticleListAll"
  },
  {
    "type": "get",
    "url": "/admin/homeowner-hub-article/list/:homeownerId",
    "title": "Homeowner Hub article list",
    "version": "1.0.0",
    "group": "Homeowner_Hub_article",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f215894de74170eca386a76\",\n            \"section\": \"Section Two\"\n        }\n    ],\n    \"state\": {\n        \"_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"title\": \"abc\"\n    },\n    \"message\": \"State article section fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/home_owner_hub_article.routes.js",
    "groupTitle": "Homeowner_Hub_article",
    "name": "GetAdminHomeownerHubArticleListHomeownerid"
  },
  {
    "type": "post",
    "url": "/admin/homeowner-hub-article/add",
    "title": "Homeowner Hub article Add",
    "version": "1.0.0",
    "group": "Homeowner_Hub_article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "home_owner_id",
            "description": "<p>Homeowner hub ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_one",
            "description": "<p>Image One</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_two",
            "description": "<p>Image Two</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description_one",
            "description": "<p>Article content one</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description_two",
            "description": "<p>Article content two</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>[{title:'test',image_one:'1.jpg',image_two:'2.jpg',description_one:'fjfjf',description_two:'fff',description_three:'ddpd',identity:'section_one'}] Content for four section</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meta_title",
            "description": "<p>Meta Title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meta_description",
            "description": "<p>Meta Description</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"state_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"section\": \"Section Two\",\n        \"identity\": \"section_two\",\n        \"title\": \"test here\",\n        \"banner_image\": \"ddd\",\n        \"image_one\": \"\",\n        \"image_two\": \"\",\n        \"content_one\": \"fddddff\",\n        \"content_two\": \"\",\n        \"content_three\": \"\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f215894de74170eca386a76\",\n        \"createdAt\": \"2020-07-29T11:08:04.806Z\",\n        \"__v\": 0\n    },\n    \"message\": \"State article Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/home_owner_hub_article.routes.js",
    "groupTitle": "Homeowner_Hub_article",
    "name": "PostAdminHomeownerHubArticleAdd"
  },
  {
    "type": "post",
    "url": "/admin/homeowner-hub-article/delete",
    "title": "Homeowner Hub article delete",
    "version": "1.0.0",
    "group": "Homeowner_Hub_article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "article_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"state_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"section\": \"Section Two\",\n        \"identity\": \"section_two\",\n        \"title\": \"tetetdddd\",\n        \"banner_image\": \"ddd\",\n        \"image_one\": \"\",\n        \"image_two\": \"\",\n        \"content_one\": \"fddddff\",\n        \"content_two\": \"\",\n        \"content_three\": \"\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5f215894de74170eca386a76\",\n        \"createdAt\": \"2020-07-29T11:08:04.806Z\",\n        \"__v\": 0\n    },\n    \"message\": \"State article Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/home_owner_hub_article.routes.js",
    "groupTitle": "Homeowner_Hub_article",
    "name": "PostAdminHomeownerHubArticleDelete"
  },
  {
    "type": "put",
    "url": "/admin/homeowner-hub-article/update",
    "title": "Homeowner Hub article edit",
    "version": "1.0.0",
    "group": "Homeowner_Hub_article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "article_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_one",
            "description": "<p>Image One</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_two",
            "description": "<p>Image Two</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description_one",
            "description": "<p>Article content one</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description_two",
            "description": "<p>Article content two</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>[{title:'test',image_one:'1.jpg',image_two:'2.jpg',description_one:'fjfjf',description_two:'fff',description_three:'ddpd',identity:'section_one'}] Content for four section</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "totalVisit",
            "description": "<p>visit count</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meta_title",
            "description": "<p>Meta Title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meta_description",
            "description": "<p>Meta Description</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"state_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"section\": \"Section Two\",\n        \"identity\": \"section_two\",\n        \"title\": \"tetetdddd\",\n        \"banner_image\": \"ddd\",\n        \"image_one\": \"\",\n        \"image_two\": \"\",\n        \"content_one\": \"fddddff\",\n        \"content_two\": \"\",\n        \"content_three\": \"\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f215894de74170eca386a76\",\n        \"createdAt\": \"2020-07-29T11:08:04.806Z\",\n        \"__v\": 0\n    },\n    \"message\": \"State article Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/home_owner_hub_article.routes.js",
    "groupTitle": "Homeowner_Hub_article",
    "name": "PutAdminHomeownerHubArticleUpdate"
  },
  {
    "type": "get",
    "url": "/admin/lead-tier/:id",
    "title": "Lead Tier details",
    "version": "1.0.0",
    "group": "Lead_Tier",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5ef35edbfc403c0b282a9230\",\n        \"title\": \"Tier One\",\n        \"description\": \"Tier One\",\n        \"perHourCapacity\": 3,\n        \"perDayCapacity\": 11,\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-06-24T14:10:35.738Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Lead tier fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/lead_tier.routes.js",
    "groupTitle": "Lead_Tier",
    "name": "GetAdminLeadTierId"
  },
  {
    "type": "get",
    "url": "/admin/lead-tier/list",
    "title": "Lead Tier list",
    "version": "1.0.0",
    "group": "Lead_Tier",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5ef35edbfc403c0b282a9230\",\n            \"title\": \"Tier One\",\n            \"description\": \"Tier One\",\n            \"perHourCapacity\": 2,\n            \"perDayCapacity\": 10,\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-24T14:10:35.738Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ef35f0100cc850b40dafe37\",\n            \"title\": \"Tier Two\",\n            \"description\": \"Tier Two\",\n            \"perHourCapacity\": 3,\n            \"perDayCapacity\": 11,\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-24T14:11:13.613Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Lead tier fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/lead_tier.routes.js",
    "groupTitle": "Lead_Tier",
    "name": "GetAdminLeadTierList"
  },
  {
    "type": "post",
    "url": "/admin/lead-tier/add",
    "title": "Lead Tier Add",
    "version": "1.0.0",
    "group": "Lead_Tier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "perHourCapacity",
            "description": "<p>Per hour lead taken capacity</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "perDayCapacity",
            "description": "<p>Per day lead taken capacity</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Tier One\",\n        \"description\": \"Tier One\",\n        \"perHourCapacity\": 2,\n        \"perDayCapacity\": 10,\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5ef35edbfc403c0b282a9230\",\n        \"createdAt\": \"2020-06-24T14:10:35.738Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Lead tier Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/lead_tier.routes.js",
    "groupTitle": "Lead_Tier",
    "name": "PostAdminLeadTierAdd"
  },
  {
    "type": "post",
    "url": "/admin/lead-tier/delete",
    "title": "Lead Tier Delete",
    "version": "1.0.0",
    "group": "Lead_Tier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lead_tier_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Tier One\",\n        \"description\": \"Tier One\",\n        \"perHourCapacity\": 3,\n        \"perDayCapacity\": 11,\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5ef35edbfc403c0b282a9230\",\n        \"createdAt\": \"2020-06-24T14:10:35.738Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Lead tier Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/lead_tier.routes.js",
    "groupTitle": "Lead_Tier",
    "name": "PostAdminLeadTierDelete"
  },
  {
    "type": "put",
    "url": "/admin/lead-tier/update",
    "title": "Lead Tier Edit",
    "version": "1.0.0",
    "group": "Lead_Tier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lead_tier_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "perHourCapacity",
            "description": "<p>Per hour lead taken capacity</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "perDayCapacity",
            "description": "<p>Per day lead taken capacity</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Tier One\",\n        \"description\": \"Tier One\",\n        \"perHourCapacity\": 3,\n        \"perDayCapacity\": 11,\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5ef35edbfc403c0b282a9230\",\n        \"createdAt\": \"2020-06-24T14:10:35.738Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Lead tier Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/lead_tier.routes.js",
    "groupTitle": "Lead_Tier",
    "name": "PutAdminLeadTierUpdate"
  },
  {
    "type": "get",
    "url": "/admin/optional-item-category/:id",
    "title": "Optional Item Category details",
    "version": "1.0.0",
    "group": "Optional_Item_Category",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"6151812a7f8199142326a36c\",\n            \"title\": \"SYSTEMS\",\n            \"plan_covered_items_data\": [\n                {\n                    \"_id\": \"5fd875e10e8144b9d57a41a7\",\n                    \"title\": \"CLOTHES WASHER\",\n                    \"image\": \"1608038562106_Clothes_Washes.png\",\n                    \"description\": \"A washing machine (laundry machine, clothes washer, or washer) is a home\\r\\nappliance used to wash laundry.\",\n                    \"average_cost_repair\": 225,\n                    \"average_cost_replacement\": 750,\n                    \"coverage_highlight\": [\n                        \"\"\n                    ],\n                    \"covered_subtitle\": \"\",\n                    \"covered_list\": \"All components and parts needed to perform its full functionality, including control\\r\\nboards, thermostats, motors, pumps, timers, wiring, belts, relays and switches,\\r\\nhoses, burners and heating elements, pulleys, igniters, fuses, lint screens and gas\\r\\nvalve\",\n                    \"covered_additional_information\": \"\",\n                    \"covered_system_types\": [\n                        \"\"\n                    ],\n                    \"not_covered_subtitle\": \"\",\n                    \"not_covered_list\": \"soap dispenser | panels | filters | cabinetry\",\n                    \"not_covered_additional_information\": \"\",\n                    \"not_covered_system_types\": [\n                        \"\"\n                    ],\n                    \"freon_coverage\": \"\",\n                    \"coverage_limit\": \"$2,000 per Term \",\n                    \"standard_price\": 59,\n                    \"custom_price\": 69,\n                    \"item_removal_price\": 20,\n                    \"percentage_fee\": \"10\",\n                    \"note\": \"\",\n                    \"status\": \"Active\",\n                    \"isDeleted\": false,\n                    \"createdAt\": \"2020-12-15T08:37:53.831Z\",\n                    \"__v\": 0,\n                    \"maximum_allowed_decrease\": \"500\",\n                    \"maximum_allowed_increase\": \"3000\",\n                    \"maximum_coverage_decrease_fee\": \"2\",\n                    \"maximum_coverage_increase_fee\": \"4\",\n                    \"type\": \"appliance\",\n                    \"maxQuantity\": 0\n                },\n                {\n                    \"_id\": \"5fd8715d0e8144b9d57a41a6\",\n                    \"title\": \"REFRIGERATOR INCLUDING ICE MAKER & WATER DISPENSER\",\n                    \"image\": \"1608035088548_REFRIGERATOR_INCLUDING_ICE_MAKER_&_WATER_DISPENSER.png\",\n                    \"description\": \"A refrigerator is an appliance for keeping things cold. Its main goal is to store food\\r\\nand beverages in a cold temperature.\",\n                    \"average_cost_repair\": 275,\n                    \"average_cost_replacement\": 2000,\n                    \"coverage_highlight\": [\n                        \"\"\n                    ],\n                    \"covered_subtitle\": \"\",\n                    \"covered_list\": \"All components and parts needed to perform its full functionality, including\\r\\nintegrated freezer, ice maker, ice dispenser, water dispenser, control board,\\r\\ncompressor, condensers, evaporators, fan motors, timers, thermostats, wiring,\\r\\nracks, shelves, door seals, door alarms and consequential food spoilage\",\n                    \"covered_additional_information\": \"\",\n                    \"covered_system_types\": [\n                        \"\"\n                    ],\n                    \"not_covered_subtitle\": \"\",\n                    \"not_covered_list\": \"touch panel | filter | water lines | freon | leaks | Free standing freezer | multi media\\r\\ncenters | wine chillers | panels | cabinetry\",\n                    \"not_covered_additional_information\": \"\",\n                    \"not_covered_system_types\": [\n                        \"\"\n                    ],\n                    \"freon_coverage\": \"\",\n                    \"coverage_limit\": \"$3,000 per Term\",\n                    \"standard_price\": 69,\n                    \"custom_price\": 79,\n                    \"item_removal_price\": 25,\n                    \"percentage_fee\": \"10\",\n                    \"note\": \"\",\n                    \"status\": \"Active\",\n                    \"isDeleted\": false,\n                    \"createdAt\": \"2020-12-15T08:18:37.009Z\",\n                    \"__v\": 0,\n                    \"maximum_allowed_decrease\": \"1000\",\n                    \"maximum_allowed_increase\": \"12000\",\n                    \"maximum_coverage_decrease_fee\": \"2\",\n                    \"maximum_coverage_increase_fee\": \"4\",\n                    \"type\": \"appliance\",\n                    \"maxQuantity\": 3\n                }\n            ]\n        }\n    ],\n    \"message\": \"Optional item category fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/optional_item_category.routes.js",
    "groupTitle": "Optional_Item_Category",
    "name": "GetAdminOptionalItemCategoryId"
  },
  {
    "type": "get",
    "url": "/admin/optional-item-category/list",
    "title": "Optional Item Category List",
    "version": "1.0.0",
    "group": "Optional_Item_Category",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"615181137f8199142326a367\",\n            \"title\": \"APPLIANCES\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2021-09-27T08:30:11.946Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"6151812a7f8199142326a36c\",\n            \"title\": \"SYSTEMS\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2021-09-27T08:30:34.185Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"615181357f8199142326a371\",\n            \"title\": \"EXTERIOR\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2021-09-27T08:30:45.835Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"615181427f8199142326a376\",\n            \"title\": \"PLUMBING AND PUMPS\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2021-09-27T08:30:58.372Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"615181507f8199142326a37b\",\n            \"title\": \"POOL AND SPA\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2021-09-27T08:31:12.854Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"6151815a7f8199142326a380\",\n            \"title\": \"OPTIONAL ITEMS\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2021-09-27T08:31:22.387Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"615181657f8199142326a385\",\n            \"title\": \"HOME ELECTRONICS\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2021-09-27T08:31:33.075Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"6151816e7f8199142326a38a\",\n            \"title\": \"HOME SECURITY\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2021-09-27T08:31:42.297Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"615181777f8199142326a38f\",\n            \"title\": \"GUEST UNIT\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2021-09-27T08:31:51.754Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Optional item category fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/optional_item_category.routes.js",
    "groupTitle": "Optional_Item_Category",
    "name": "GetAdminOptionalItemCategoryList"
  },
  {
    "type": "post",
    "url": "/admin/optional-item-category/add",
    "title": "Optional Item Category Add",
    "version": "1.0.0",
    "group": "Optional_Item_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"GUEST UNIT\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"615181777f8199142326a38f\",\n        \"createdAt\": \"2021-09-27T08:31:51.754Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Optional item category Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/optional_item_category.routes.js",
    "groupTitle": "Optional_Item_Category",
    "name": "PostAdminOptionalItemCategoryAdd"
  },
  {
    "type": "post",
    "url": "/admin/optional-item-category/delete",
    "title": "Optional Item Category Delete",
    "version": "1.0.0",
    "group": "Optional_Item_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "optional_item_category_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"APPLIANCES\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"615181137f8199142326a367\",\n        \"createdAt\": \"2021-09-27T08:30:11.946Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Optional item category Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/optional_item_category.routes.js",
    "groupTitle": "Optional_Item_Category",
    "name": "PostAdminOptionalItemCategoryDelete"
  },
  {
    "type": "put",
    "url": "/admin/optional-item-category/assign",
    "title": "Item Assign",
    "version": "1.0.0",
    "group": "Optional_Item_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "covered_item_id",
            "description": "<p>['5fdb312b0e8144b9d57a41b0','5fdb312b0e8144b9d57a41b0','5fdb312b0e8144b9d57a41b0']</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "optional_item_category_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"test category\",\n        \"covered_item_id\": [\n            \"5fdb312b0e8144b9d57a41b0\",\n            \"5fdb312b0e8144b9d57a41b0\",\n            \"5fdb312b0e8144b9d57a41b0\"\n        ],\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"6151a994ec071222f411e8e4\",\n        \"createdAt\": \"2021-09-27T11:23:00.835Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Item has assigned Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/optional_item_category.routes.js",
    "groupTitle": "Optional_Item_Category",
    "name": "PutAdminOptionalItemCategoryAssign"
  },
  {
    "type": "put",
    "url": "/admin/optional-item-category/update",
    "title": "Optional Item Category Edit",
    "version": "1.0.0",
    "group": "Optional_Item_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "optional_item_category_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"APPLIANCES1\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"615181137f8199142326a367\",\n        \"createdAt\": \"2021-09-27T08:30:11.946Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Optional item category Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/optional_item_category.routes.js",
    "groupTitle": "Optional_Item_Category",
    "name": "PutAdminOptionalItemCategoryUpdate"
  },
  {
    "type": "get",
    "url": "/admin/partner/:id",
    "title": "Partner details",
    "version": "1.0.0",
    "group": "Partner",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f186a9927355013142e3b14\",\n        \"title\": \"Certified Service Provider\",\n        \"description\": \"Certified Service Provider\",\n        \"image\": \"image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-22T16:34:33.003Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Partner type fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner.routes.js",
    "groupTitle": "Partner",
    "name": "GetAdminPartnerId"
  },
  {
    "type": "get",
    "url": "/admin/partner/list",
    "title": "Partner list",
    "version": "1.0.0",
    "group": "Partner",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f186a9927355013142e3b14\",\n            \"title\": \"Certified Service Provider\",\n            \"description\": \"Certified Service Provider\",\n            \"image\": \"image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-07-22T16:34:33.003Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Partner type fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner.routes.js",
    "groupTitle": "Partner",
    "name": "GetAdminPartnerList"
  },
  {
    "type": "post",
    "url": "/admin/partner/add",
    "title": "Partner Add",
    "version": "1.0.0",
    "group": "Partner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f186a9927355013142e3b14\",\n        \"title\": \"Certified Service Provider\",\n        \"description\": \"Certified Service Provider\",\n        \"image\": \"image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-22T16:34:33.003Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Partner type created Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner.routes.js",
    "groupTitle": "Partner",
    "name": "PostAdminPartnerAdd"
  },
  {
    "type": "post",
    "url": "/admin/partner/delete",
    "title": "Partner Delete",
    "version": "1.0.0",
    "group": "Partner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f186a9927355013142e3b14\",\n        \"title\": \"Certified Service Provider\",\n        \"description\": \"Certified Service Provider\",\n        \"image\": \"image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-22T16:34:33.003Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Partner type Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner.routes.js",
    "groupTitle": "Partner",
    "name": "PostAdminPartnerDelete"
  },
  {
    "type": "post",
    "url": "/admin/partner/multiple-status-change",
    "title": "Partner Multiple Status Change",
    "version": "1.0.0",
    "group": "Partner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "partner",
            "description": "<p>Id [{id:5f186a9927355013142e3b14,status:Pending}]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f186a9927355013142e3b14\",\n        \"title\": \"Certified Service Provider\",\n        \"description\": \"Certified Service Provider\",\n        \"image\": \"image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-22T16:34:33.003Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Partner has approved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner.routes.js",
    "groupTitle": "Partner",
    "name": "PostAdminPartnerMultipleStatusChange"
  },
  {
    "type": "post",
    "url": "/admin/partner/status-change",
    "title": "Partner Status Change",
    "version": "1.0.0",
    "group": "Partner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f186a9927355013142e3b14\",\n        \"title\": \"Certified Service Provider\",\n        \"description\": \"Certified Service Provider\",\n        \"image\": \"image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-22T16:34:33.003Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Partner has approved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner.routes.js",
    "groupTitle": "Partner",
    "name": "PostAdminPartnerStatusChange"
  },
  {
    "type": "put",
    "url": "/admin/partner/update",
    "title": "Partner Edit",
    "version": "1.0.0",
    "group": "Partner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f186a9927355013142e3b14\",\n        \"title\": \"Certified Service Provider\",\n        \"description\": \"Certified Service Provider\",\n        \"image\": \"image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-22T16:34:33.003Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Partner type Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner.routes.js",
    "groupTitle": "Partner",
    "name": "PutAdminPartnerUpdate"
  },
  {
    "type": "get",
    "url": "/admin/partner-service/:id",
    "title": "Partner Service details",
    "version": "1.0.0",
    "group": "Partner_Service",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n            \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n            \"title\": \"Test one\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n            \"__v\": 0\n    },\n    \"message\": \"Service fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner_service.routes.js",
    "groupTitle": "Partner_Service",
    "name": "GetAdminPartnerServiceId"
  },
  {
    "type": "get",
    "url": "/admin/partner-service/list",
    "title": "Partner Service list",
    "version": "1.0.0",
    "group": "Partner_Service",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n            \"title\": \"Test one\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ed783f654f8b50e2170bb1a\",\n            \"title\": \"Test two\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-03T11:05:26.558Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Service fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner_service.routes.js",
    "groupTitle": "Partner_Service",
    "name": "GetAdminPartnerServiceList"
  },
  {
    "type": "post",
    "url": "/admin/partner-service/add",
    "title": "Partner Service Add",
    "version": "1.0.0",
    "group": "Partner_Service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n            \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n            \"title\": \"Test one\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n            \"__v\": 0\n    },\n    \"message\": \"Service Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner_service.routes.js",
    "groupTitle": "Partner_Service",
    "name": "PostAdminPartnerServiceAdd"
  },
  {
    "type": "post",
    "url": "/admin/partner-service/delete",
    "title": "Partner Service Delete",
    "version": "1.0.0",
    "group": "Partner_Service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n            \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n            \"title\": \"Test one\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n            \"__v\": 0\n    },\n    \"message\": \"Service Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner_service.routes.js",
    "groupTitle": "Partner_Service",
    "name": "PostAdminPartnerServiceDelete"
  },
  {
    "type": "put",
    "url": "/admin/partner-service/update",
    "title": "Partner Service Edit",
    "version": "1.0.0",
    "group": "Partner_Service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n            \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n            \"title\": \"Test one\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n            \"__v\": 0\n    },\n    \"message\": \"Service Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner_service.routes.js",
    "groupTitle": "Partner_Service",
    "name": "PutAdminPartnerServiceUpdate"
  },
  {
    "type": "get",
    "url": "/admin/partner-type/:id",
    "title": "Partner Type details",
    "version": "1.0.0",
    "group": "Partner_Type",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f186a9927355013142e3b14\",\n        \"title\": \"Certified Service Provider\",\n        \"description\": \"Certified Service Provider\",\n        \"image\": \"image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-22T16:34:33.003Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Partner type fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner_type.routes.js",
    "groupTitle": "Partner_Type",
    "name": "GetAdminPartnerTypeId"
  },
  {
    "type": "get",
    "url": "/admin/partner-type/list",
    "title": "Partner Type list",
    "version": "1.0.0",
    "group": "Partner_Type",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f186a9927355013142e3b14\",\n            \"title\": \"Certified Service Provider\",\n            \"description\": \"Certified Service Provider\",\n            \"image\": \"image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-07-22T16:34:33.003Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Partner type fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner_type.routes.js",
    "groupTitle": "Partner_Type",
    "name": "GetAdminPartnerTypeList"
  },
  {
    "type": "post",
    "url": "/admin/partner-type/add",
    "title": "Partner Type Add",
    "version": "1.0.0",
    "group": "Partner_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f186a9927355013142e3b14\",\n        \"title\": \"Certified Service Provider\",\n        \"description\": \"Certified Service Provider\",\n        \"image\": \"image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-22T16:34:33.003Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Partner type created Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner_type.routes.js",
    "groupTitle": "Partner_Type",
    "name": "PostAdminPartnerTypeAdd"
  },
  {
    "type": "post",
    "url": "/admin/partner-type/delete",
    "title": "Partner Type Delete",
    "version": "1.0.0",
    "group": "Partner_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "partner_type_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f186a9927355013142e3b14\",\n        \"title\": \"Certified Service Provider\",\n        \"description\": \"Certified Service Provider\",\n        \"image\": \"image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-22T16:34:33.003Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Partner type Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner_type.routes.js",
    "groupTitle": "Partner_Type",
    "name": "PostAdminPartnerTypeDelete"
  },
  {
    "type": "put",
    "url": "/admin/partner-type/update",
    "title": "Partner Type Edit",
    "version": "1.0.0",
    "group": "Partner_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "partner_type_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f186a9927355013142e3b14\",\n        \"title\": \"Certified Service Provider\",\n        \"description\": \"Certified Service Provider\",\n        \"image\": \"image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-22T16:34:33.003Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Partner type Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/partner_type.routes.js",
    "groupTitle": "Partner_Type",
    "name": "PutAdminPartnerTypeUpdate"
  },
  {
    "type": "get",
    "url": "/admin/peace-of-mind/:id",
    "title": "Peace Of Mind details",
    "version": "1.0.0",
    "group": "Peace_Of_Mind",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5eeccd45fb667313fdecbe49\",\n        \"title\": \"test\",\n        \"description\": \"test decsription\",\n        \"image\": \"image_1592577346723_download.jpeg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-06-19T14:35:49.355Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Peace of mind fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/peace_of_mind.routes.js",
    "groupTitle": "Peace_Of_Mind",
    "name": "GetAdminPeaceOfMindId"
  },
  {
    "type": "get",
    "url": "/admin/peace-of-mind/list",
    "title": "Peace Of Mind list",
    "version": "1.0.0",
    "group": "Peace_Of_Mind",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5eeccd45fb667313fdecbe49\",\n            \"title\": \"test\",\n            \"description\": \"test decsription\",\n            \"image\": \"image_1592577346723_download.jpeg\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-19T14:35:49.355Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Peace of mind fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/peace_of_mind.routes.js",
    "groupTitle": "Peace_Of_Mind",
    "name": "GetAdminPeaceOfMindList"
  },
  {
    "type": "post",
    "url": "/admin/peace-of-mind/add",
    "title": "Peace Of Mind Add",
    "version": "1.0.0",
    "group": "Peace_Of_Mind",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"test\",\n        \"description\": \"test decsription\",\n        \"image\": \"image_1592577346723_download.jpeg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5eeccd45fb667313fdecbe49\",\n        \"createdAt\": \"2020-06-19T14:35:49.355Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Peace of mind Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/peace_of_mind.routes.js",
    "groupTitle": "Peace_Of_Mind",
    "name": "PostAdminPeaceOfMindAdd"
  },
  {
    "type": "post",
    "url": "/admin/peace-of-mind/delete",
    "title": "Peace Of Mind Delete",
    "version": "1.0.0",
    "group": "Peace_Of_Mind",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "peace_mind_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"test here\",\n        \"description\": \"test decsription\",\n        \"image\": \"image_1592577346723_download.jpeg\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5eeccd45fb667313fdecbe49\",\n        \"createdAt\": \"2020-06-19T14:35:49.355Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Peace of mind Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/peace_of_mind.routes.js",
    "groupTitle": "Peace_Of_Mind",
    "name": "PostAdminPeaceOfMindDelete"
  },
  {
    "type": "put",
    "url": "/admin/peace-of-mind/update",
    "title": "Peace Of Mind Edit",
    "version": "1.0.0",
    "group": "Peace_Of_Mind",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "peace_mind_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"test here\",\n        \"description\": \"test decsription\",\n        \"image\": \"image_1592577346723_download.jpeg\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5eeccd45fb667313fdecbe49\",\n        \"createdAt\": \"2020-06-19T14:35:49.355Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Peace of mind Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/peace_of_mind.routes.js",
    "groupTitle": "Peace_Of_Mind",
    "name": "PutAdminPeaceOfMindUpdate"
  },
  {
    "type": "get",
    "url": "/admin/permission/role/:id",
    "title": "Role Permissions list",
    "version": "1.0.0",
    "group": "Permissions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Role Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"Lead\",\n            \"permission_list\": [\n                {\n                    \"_id\": \"5ed7c16dd5d10f12b04c77e8\",\n                    \"permission_group\": \"Lead\",\n                    \"operation\": [\n                        \"lead.edit\"\n                    ],\n                    \"displayName\": \"Lead Edit\",\n                    \"description\": \"Lead Edit permission\",\n                    \"hasAccess\": false\n                },\n                {\n                    \"_id\": \"5ed7c1a11ba5f212b6888adb\",\n                    \"permission_group\": \"Lead\",\n                    \"operation\": [\n                        \"lead.add\"\n                    ],\n                    \"displayName\": \"Lead Add\",\n                    \"description\": \"Lead Add permission\",\n                    \"hasAccess\": false\n                }\n            ]\n        }\n    ],\n    \"message\": \"Permissions fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/permission.routes.js",
    "groupTitle": "Permissions",
    "name": "GetAdminPermissionRoleId"
  },
  {
    "type": "get",
    "url": "/admin/permission/user/:id",
    "title": "User Permissions list",
    "version": "1.0.0",
    "group": "Permissions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"Lead\",\n            \"permission_list\": [\n                {\n                    \"_id\": \"5ed7c16dd5d10f12b04c77e8\",\n                    \"permission_group\": \"Lead\",\n                    \"operation\": [\n                        \"lead.edit\"\n                    ],\n                    \"displayName\": \"Lead Edit\",\n                    \"description\": \"Lead Edit permission\",\n                    \"hasAccess\": false\n                },\n                {\n                    \"_id\": \"5ed7c1a11ba5f212b6888adb\",\n                    \"permission_group\": \"Lead\",\n                    \"operation\": [\n                        \"lead.add\"\n                    ],\n                    \"displayName\": \"Lead Add\",\n                    \"description\": \"Lead Add permission\",\n                    \"hasAccess\": false\n                }\n            ]\n        }\n    ],\n    \"message\": \"Permissions fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/permission.routes.js",
    "groupTitle": "Permissions",
    "name": "GetAdminPermissionUserId"
  },
  {
    "type": "post",
    "url": "/admin/permission/create",
    "title": "Permissions Create",
    "version": "1.0.0",
    "group": "Permissions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "permission_group",
            "description": "<p>Group</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "displayName",
            "description": "<p>Display Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "operation",
            "description": "<p>Link or Path</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"permission_group\": \"Lead\",\n        \"operation\": [\n            \"lead.add\"\n        ],\n        \"displayName\": \"Lead Add\",\n        \"description\": \"Lead add permission\",\n        \"status\": \"Active\",\n        \"is_deleted\": \"no\",\n        \"_id\": \"5ed7bd0c67374c1246b4802c\",\n        \"__v\": 0\n    },\n    \"message\": \"Permissions created Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/permission.routes.js",
    "groupTitle": "Permissions",
    "name": "PostAdminPermissionCreate"
  },
  {
    "type": "post",
    "url": "/admin/permission/role/update",
    "title": "Role Permissions Update",
    "version": "1.0.0",
    "group": "Permissions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "role",
            "description": "<p>Role Id</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "permissionall",
            "description": "<p>Array of permission id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n    \"_id\" : ObjectId(\"5dd6660f78ba8f8e52593994\"),\n    \"role\" : ObjectId(\"5cc0427b9c4c3ac9c47b2579\"),\n    \"permissionall\" : [ \n        ObjectId(\"5dd64acd78ba8f8e52575fcd\")\n    ]\n},\n  \"message\": \"Permissions updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/permission.routes.js",
    "groupTitle": "Permissions",
    "name": "PostAdminPermissionRoleUpdate"
  },
  {
    "type": "post",
    "url": "/admin/permission/user/update",
    "title": "User Permissions Update",
    "version": "1.0.0",
    "group": "Permissions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "permissionall",
            "description": "<p>Array of permission id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n    \"_id\" : ObjectId(\"5dd6660f78ba8f8e52593994\"),\n    \"userId\" : ObjectId(\"5cc0427b9c4c3ac9c47b2579\"),\n    \"permissionall\" : [ \n        ObjectId(\"5dd64acd78ba8f8e52575fcd\")\n    ]\n},\n  \"message\": \"Permissions updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/permission.routes.js",
    "groupTitle": "Permissions",
    "name": "PostAdminPermissionUserUpdate"
  },
  {
    "type": "get",
    "url": "/admin/plan/:id",
    "title": "Plan details",
    "version": "1.0.0",
    "group": "Plan",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f2a8290511b0708685afbe6\",\n        \"title\": \"test plan\",\n        \"image\": \"plan_image_1596621452717_download.jpeg\",\n        \"covered_items\": [\n            [\n                {\n                    \"_id\": \"5f27e8920502ae264b47ffd6\",\n                    \"title\": \"duplex\",\n                    \"status\": \"Active\",\n                    \"isDeleted\": false,\n                    \"createdAt\": \"2020-08-03T10:36:02.433Z\",\n                    \"__v\": 0\n                }\n            ],\n            [\n                {\n                    \"_id\": \"5f240ae16382e747e9530081\",\n                    \"title\": \"Item1\",\n                    \"status\": \"Active\",\n                    \"isDeleted\": false,\n                    \"createdAt\": \"2020-07-31T12:13:21.373Z\",\n                    \"__v\": 0\n                }\n            ]\n        ],\n        \"additional_items\": [\n            [\n                {\n                    \"_id\": \"5f28145f0502ae264b47ffdf\",\n                    \"title\": \"Tax2\",\n                    \"price\": 75,\n                    \"status\": \"Active\",\n                    \"isDeleted\": true,\n                    \"createdAt\": \"2020-08-03T13:42:55.514Z\",\n                    \"__v\": 0\n                }\n            ],\n            [\n                {\n                    \"_id\": \"5f242773ada59456dc50233f\",\n                    \"title\": \"Tax\",\n                    \"price\": 43,\n                    \"status\": \"Active\",\n                    \"isDeleted\": false,\n                    \"createdAt\": \"2020-07-31T14:15:15.874Z\",\n                    \"__v\": 0\n                }\n            ]\n        ],\n        \"plan_pricing\": [\n            {\n                \"price\": \"150\",\n                \"covering_unit\": 4,\n                \"_id\": \"5f2a8290511b0708685afbe8\",\n                \"property_type_id\": [\n                    {\n                        \"_id\": \"5f27e93a0502ae264b47ffda\",\n                        \"title\": \"fsdf\",\n                        \"status\": \"Active\",\n                        \"isDeleted\": true,\n                        \"createdAt\": \"2020-08-03T10:38:50.593Z\",\n                        \"__v\": 0\n                    }\n                ]\n            },\n            {\n                \"price\": \"100\",\n                \"covering_unit\": 3,\n                \"_id\": \"5f2a8290511b0708685afbe7\",\n                \"property_type_id\": [\n                    {\n                        \"_id\": \"5f23f300e58e393af84da430\",\n                        \"title\": \"Duplex\",\n                        \"status\": \"Active\",\n                        \"isDeleted\": false,\n                        \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n                        \"__v\": 0\n                    }\n                ]\n            }\n        ],\n        \"service_fee\": [\n            {\n                \"price\": \"75\",\n                \"decrease_prcie\": \"0\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba6\"\n            },\n            {\n                \"price\": \"100\",\n                \"decrease_prcie\": \"30\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba7\"\n            },\n            {\n                \"price\": \"125\",\n                \"decrease_prcie\": \"50\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba8\"\n            }\n        ]\n    },\n    \"message\": \"Plan fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan.routes.js",
    "groupTitle": "Plan",
    "name": "GetAdminPlanId"
  },
  {
    "type": "post",
    "url": "/admin/plan/add",
    "title": "Plan Add",
    "version": "1.0.0",
    "group": "Plan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "maximum_aggregated_coverage",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "service_fee",
            "description": "<p>{price_0:10.00,price_70:100.00,price_100:30.00,price_130:60.00}</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "category_covered_item",
            "description": "<p>[{category_id:&quot;5ee87abd9522430a55cdc82a&quot;,covered_item_id[&quot;5ee87abd9522430a55cdc82c&quot;,&quot;5ee87abd9522430a55cdc82d&quot;]}]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "property_pricing",
            "description": "<p>[{property_type_id:&quot;5f23f300e58e393af84da430&quot;,info:[{property_size_id:&quot;5ee87abd9522430a55cdc82a&quot;,covered_item_id[&quot;5ee87abd9522430a55cdc82c&quot;,&quot;5ee87abd9522430a55cdc82d&quot;],cost_per_plan:12.20,quantity:2,description:&quot;test here&quot;}]}]</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "item_removal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "optional_item",
            "description": "<p>[{covered_item_id:&quot;5ee87abd9522430a55cdc82c&quot;,quantity:2}]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"test plan 12\",\n        \"image\": \"plan_image_1596623349656_download.jpeg\",\n        \"covered_item_id\": [\n            \"5f240ae16382e747e9530081\",\n            \"5f27e8920502ae264b47ffd6\"\n        ],\n        \"additional_item_id\": [\n            \"5f242773ada59456dc50233f\",\n            \"5f28145f0502ae264b47ffdf\"\n        ],\n        \"isDeleted\": false,\n        \"status\": \"Active\",\n        \"_id\": \"5f2a89f8d651de0a5ebdeaea\",\n        \"plan_pricing\": [\n            {\n                \"price\": \"100\",\n                \"covering_unit\": 3,\n                \"_id\": \"5f2a89f8d651de0a5ebdeaeb\",\n                \"property_type_id\": \"5f23f300e58e393af84da430\"\n            },\n            {\n                \"price\": \"150\",\n                \"covering_unit\": 4,\n                \"_id\": \"5f2a89f8d651de0a5ebdeaec\",\n                \"property_type_id\": \"5f27e93a0502ae264b47ffda\"\n            }\n        ],\n        \"service_fee\": [\n            {\n                \"price\": \"75\",\n                \"decrease_prcie\": \"0\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba6\"\n            },\n            {\n                \"price\": \"100\",\n                \"decrease_prcie\": \"30\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba7\"\n            },\n            {\n                \"price\": \"125\",\n                \"decrease_prcie\": \"50\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba8\"\n            }\n        ],\n        \"createdAt\": \"2020-08-05T10:29:12.201Z\",\n        \"updatedAt\": \"2020-08-05T10:29:12.201Z\"\n    },\n    \"message\": \"Plan Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan.routes.js",
    "groupTitle": "Plan",
    "name": "PostAdminPlanAdd"
  },
  {
    "type": "post",
    "url": "/admin/plan/delete",
    "title": "Plan Delete",
    "version": "1.0.0",
    "group": "Plan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"test plan 457\",\n        \"image\": \"plan_image_1596623349656_download.jpeg\",\n        \"covered_item_id\": [\n            \"5f240ae16382e747e9530081\",\n            \"5f27e8920502ae264b47ffd6\"\n        ],\n        \"additional_item_id\": [\n            \"5f242773ada59456dc50233f\",\n            \"5f28145f0502ae264b47ffdf\"\n        ],\n        \"isDeleted\": true,\n        \"status\": \"Active\",\n        \"_id\": \"5f2a89f8d651de0a5ebdeaea\",\n        \"plan_pricing\": [\n            {\n                \"price\": \"100\",\n                \"covering_unit\": 3,\n                \"_id\": \"5f2a8beada6ee90aaf4f92ab\",\n                \"property_type_id\": \"5f23f300e58e393af84da430\"\n            },\n            {\n                \"price\": \"150\",\n                \"covering_unit\": 4,\n                \"_id\": \"5f2a8beada6ee90aaf4f92ac\",\n                \"property_type_id\": \"5f27e93a0502ae264b47ffda\"\n            }\n        ],\n        \"service_fee\": [\n            {\n                \"price\": \"75\",\n                \"decrease_prcie\": \"0\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba6\"\n            },\n            {\n                \"price\": \"100\",\n                \"decrease_prcie\": \"30\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba7\"\n            },\n            {\n                \"price\": \"125\",\n                \"decrease_prcie\": \"50\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba8\"\n            }\n        ],\n        \"createdAt\": \"2020-08-05T10:29:12.201Z\",\n        \"updatedAt\": \"2020-08-05T11:14:14.665Z\"\n    },\n    \"message\": \"Plan Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan.routes.js",
    "groupTitle": "Plan",
    "name": "PostAdminPlanDelete"
  },
  {
    "type": "post",
    "url": "/admin/plan/list",
    "title": "Plan list",
    "version": "1.0.0",
    "group": "Plan",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f2a8290511b0708685afbe6\",\n            \"title\": \"test plan\",\n            \"image\": \"plan_image_1596621452717_download.jpeg\",\n            \"covered_items\": [\n                [\n                    {\n                        \"_id\": \"5f27e8920502ae264b47ffd6\",\n                        \"title\": \"duplex\",\n                        \"status\": \"Active\",\n                        \"isDeleted\": false,\n                        \"createdAt\": \"2020-08-03T10:36:02.433Z\",\n                        \"__v\": 0\n                    }\n                ],\n                [\n                    {\n                        \"_id\": \"5f240ae16382e747e9530081\",\n                        \"title\": \"Item1\",\n                        \"status\": \"Active\",\n                        \"isDeleted\": false,\n                        \"createdAt\": \"2020-07-31T12:13:21.373Z\",\n                        \"__v\": 0\n                    }\n                ]\n            ],\n            \"additional_items\": [\n                [\n                    {\n                        \"_id\": \"5f28145f0502ae264b47ffdf\",\n                        \"title\": \"Tax2\",\n                        \"price\": 75,\n                        \"status\": \"Active\",\n                        \"isDeleted\": true,\n                        \"createdAt\": \"2020-08-03T13:42:55.514Z\",\n                        \"__v\": 0\n                    }\n                ],\n                [\n                    {\n                        \"_id\": \"5f242773ada59456dc50233f\",\n                        \"title\": \"Tax\",\n                        \"price\": 43,\n                        \"status\": \"Active\",\n                        \"isDeleted\": false,\n                        \"createdAt\": \"2020-07-31T14:15:15.874Z\",\n                        \"__v\": 0\n                    }\n                ]\n            ],\n            \"plan_pricing\": [\n                {\n                    \"price\": \"100\",\n                    \"covering_unit\": 3,\n                    \"_id\": \"5f2a8290511b0708685afbe7\",\n                    \"property_type_id\": [\n                        {\n                            \"_id\": \"5f23f300e58e393af84da430\",\n                            \"title\": \"Duplex\",\n                            \"status\": \"Active\",\n                            \"isDeleted\": false,\n                            \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n                            \"__v\": 0\n                        }\n                    ]\n                },\n                {\n                    \"price\": \"150\",\n                    \"covering_unit\": 4,\n                    \"_id\": \"5f2a8290511b0708685afbe8\",\n                    \"property_type_id\": [\n                        {\n                            \"_id\": \"5f27e93a0502ae264b47ffda\",\n                            \"title\": \"fsdf\",\n                            \"status\": \"Active\",\n                            \"isDeleted\": true,\n                            \"createdAt\": \"2020-08-03T10:38:50.593Z\",\n                            \"__v\": 0\n                        }\n                    ]\n                }\n            ],\n            \"service_fee\": [\n            {\n                \"price\": \"75\",\n                \"decrease_prcie\": \"0\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba6\"\n            },\n            {\n                \"price\": \"100\",\n                \"decrease_prcie\": \"30\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba7\"\n            },\n            {\n                \"price\": \"125\",\n                \"decrease_prcie\": \"50\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba8\"\n            }\n        ]\n        }\n    ],\n    \"message\": \"Plan fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan.routes.js",
    "groupTitle": "Plan",
    "name": "PostAdminPlanList"
  },
  {
    "type": "post",
    "url": "/admin/question_answer_tab/add",
    "title": "Tab Add",
    "version": "1.0.0",
    "group": "Plan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>['plan','home']</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n        \"data\": {\n            \"name\": \"Home\",\n            \"plan_id\": \"5f2a8290511b0708685afbe6\",\n            \"type\": \"plan\",\n            \"isDeleted\": false,\n            \"status\": \"Active\",\n            \"_id\": \"5f3bb100943028220a8fd801\",\n            \"createdAt\": \"2020-08-18T10:44:16.511Z\",\n            \"updatedAt\": \"2020-08-18T10:44:16.511Z\"\n        },\n        \"message\": \"Question Answer Tab Created successfully\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/question_answer_tab.routes.js",
    "groupTitle": "Plan",
    "name": "PostAdminQuestion_answer_tabAdd"
  },
  {
    "type": "post",
    "url": "/admin/question_answer_tab/delete",
    "title": "Plan Delete",
    "version": "1.0.0",
    "group": "Plan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tab_id",
            "description": "<p>Id Tab _id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n        \"data\": {\n            \"name\": \"Home1\",\n            \"plan_id\": \"5f2a8290511b0708685afbe6\",\n            \"type\": \"plan\",\n            \"isDeleted\": true,\n            \"status\": \"Active\",\n            \"_id\": \"5f3bb100943028220a8fd801\",\n            \"createdAt\": \"2020-08-18T10:44:16.511Z\",\n            \"updatedAt\": \"2020-08-18T11:25:19.635Z\"\n        },\n        \"message\": \"Tab Deleted Successfully\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/question_answer_tab.routes.js",
    "groupTitle": "Plan",
    "name": "PostAdminQuestion_answer_tabDelete"
  },
  {
    "type": "put",
    "url": "/admin/plan/update",
    "title": "Plan Edit",
    "version": "1.0.0",
    "group": "Plan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "plan_pricing",
            "description": "<p>[{property_type_id:&quot;5ee87abd9522430a55cdc82a&quot;,price:100.00,covering_unit:4},{property_type_id:&quot;5ee87abd9522430a55cdc82a&quot;,price:100.00,covering_unit:4}]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "covered_item_id",
            "description": "<p>[&quot;5ee87abd9522430a55cdc82a&quot;,&quot;5ee87abd9522430a55cdc82b&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "additional_item_id",
            "description": "<p>[&quot;5ee87abd9522430a55cdc82c&quot;,&quot;5ee87abd9522430a55cdc82d&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "service_fee",
            "description": "<p>[{price:75.00,decrease_prcie:0.00},{price:100.00,decrease_prcie:30.00},{price:125.00,decrease_prcie:50.00}]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"test plan 456\",\n        \"image\": \"plan_image_1596623349656_download.jpeg\",\n        \"covered_item_id\": [\n            \"5f240ae16382e747e9530081\",\n            \"5f27e8920502ae264b47ffd6\"\n        ],\n        \"additional_item_id\": [\n            \"5f242773ada59456dc50233f\",\n            \"5f28145f0502ae264b47ffdf\"\n        ],\n        \"isDeleted\": false,\n        \"status\": \"Active\",\n        \"_id\": \"5f2a89f8d651de0a5ebdeaea\",\n        \"plan_pricing\": [\n            {\n                \"price\": \"100\",\n                \"covering_unit\": 3,\n                \"_id\": \"5f2a8beada6ee90aaf4f92ab\",\n                \"property_type_id\": \"5f23f300e58e393af84da430\"\n            },\n            {\n                \"price\": \"150\",\n                \"covering_unit\": 4,\n                \"_id\": \"5f2a8beada6ee90aaf4f92ac\",\n                \"property_type_id\": \"5f27e93a0502ae264b47ffda\"\n            }\n        ],\n        \"service_fee\": [\n            {\n                \"price\": \"75\",\n                \"decrease_prcie\": \"0\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba6\"\n            },\n            {\n                \"price\": \"100\",\n                \"decrease_prcie\": \"30\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba7\"\n            },\n            {\n                \"price\": \"125\",\n                \"decrease_prcie\": \"50\",\n                \"_id\": \"5f2ad5d4ca3fc30d57a5fba8\"\n            }\n        ],\n        \"createdAt\": \"2020-08-05T10:29:12.201Z\",\n        \"updatedAt\": \"2020-08-05T10:37:30.933Z\"\n    },\n    \"message\": \"Plan Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan.routes.js",
    "groupTitle": "Plan",
    "name": "PutAdminPlanUpdate"
  },
  {
    "type": "put",
    "url": "/admin/question_answer_tab/update",
    "title": "Tab Edit",
    "version": "1.0.0",
    "group": "Plan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_id",
            "description": "<p>Plan Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tab_id",
            "description": "<p>tab _id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n       \"data\": {\n           \"name\": \"Home1\",\n           \"plan_id\": \"5f2a8290511b0708685afbe6\",\n           \"type\": \"plan\",\n           \"isDeleted\": false,\n           \"status\": \"Active\",\n           \"_id\": \"5f3bb100943028220a8fd801\",\n           \"createdAt\": \"2020-08-18T10:44:16.511Z\",\n           \"updatedAt\": \"2020-08-18T11:15:31.408Z\"\n       },\n       \"message\": \"Tab Updated Successfully\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/question_answer_tab.routes.js",
    "groupTitle": "Plan",
    "name": "PutAdminQuestion_answer_tabUpdate"
  },
  {
    "type": "get",
    "url": "/admin/plan-additional-item/:id",
    "title": "Plan Additional Item details",
    "version": "1.0.0",
    "group": "Plan_Additional_Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>plan Additional Item Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f242773ada59456dc50233f\",\n        \"title\": \"Duplex\",\n        \"price\": 42,\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-31T14:15:15.874Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Additional Item fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_additional_item.routes.js",
    "groupTitle": "Plan_Additional_Items",
    "name": "GetAdminPlanAdditionalItemId"
  },
  {
    "type": "get",
    "url": "/admin/plan-additional-item/list",
    "title": "Plan Additional list",
    "version": "1.0.0",
    "group": "Plan_Additional_Items",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f242773ada59456dc50233f\",\n            \"title\": \"Tax\",\n            \"price\": 43.5,\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-07-31T14:15:15.874Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Plan Additional Item fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_additional_item.routes.js",
    "groupTitle": "Plan_Additional_Items",
    "name": "GetAdminPlanAdditionalItemList"
  },
  {
    "type": "post",
    "url": "/admin/plan-additional-item/add",
    "title": "Plan Additional Items Add",
    "version": "1.0.0",
    "group": "Plan_Additional_Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Item Name</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "price",
            "description": "<p>Item Price</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "covered_list",
            "description": "<p>What is covered</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "not_covered_list",
            "description": "<p>What is covered</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "highlight",
            "description": "<p>Coverage highlight</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "note",
            "description": "<p>Important Note</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "coverage_limit",
            "description": "<p>Coverage limit</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"price\": 42,\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f242773ada59456dc50233f\",\n        \"createdAt\": \"2020-07-31T14:15:15.874Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Additional Item Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_additional_item.routes.js",
    "groupTitle": "Plan_Additional_Items",
    "name": "PostAdminPlanAdditionalItemAdd"
  },
  {
    "type": "post",
    "url": "/admin/plan-additional-item/delete",
    "title": "Plan Covered Item Delete",
    "version": "1.0.0",
    "group": "Plan_Additional_Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_additional_item_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"price\": 42,\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5f242773ada59456dc50233f\",\n        \"createdAt\": \"2020-07-31T14:15:15.874Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Additional Item Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_additional_item.routes.js",
    "groupTitle": "Plan_Additional_Items",
    "name": "PostAdminPlanAdditionalItemDelete"
  },
  {
    "type": "put",
    "url": "/admin/plan-additional-item/update",
    "title": "Plan Covered Items Update",
    "version": "1.0.0",
    "group": "Plan_Additional_Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_additional_item_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Item Name</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "price",
            "description": "<p>Item Price</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "covered_list",
            "description": "<p>What is covered</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "not_covered_list",
            "description": "<p>What is covered</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "highlight",
            "description": "<p>Coverage highlight</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "note",
            "description": "<p>Important Note</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "coverage_limit",
            "description": "<p>Coverage limit</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Tax\",\n        \"price\": 43.5,\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5f242773ada59456dc50233f\",\n        \"createdAt\": \"2020-07-31T14:15:15.874Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Additional Item Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_additional_item.routes.js",
    "groupTitle": "Plan_Additional_Items",
    "name": "PutAdminPlanAdditionalItemUpdate"
  },
  {
    "type": "get",
    "url": "/admin/plan-appliance-item/:id",
    "title": "Plan Appliance Item details",
    "version": "1.0.0",
    "group": "Plan_Appliance_Items",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f240ae16382e747e9530081\",\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-31T12:13:21.373Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Appliance Item fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_appliance_item.routes.js",
    "groupTitle": "Plan_Appliance_Items",
    "name": "GetAdminPlanApplianceItemId"
  },
  {
    "type": "get",
    "url": "/admin/plan-appliance-item/list",
    "title": "Plan Appliance list",
    "version": "1.0.0",
    "group": "Plan_Appliance_Items",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f240ae16382e747e9530081\",\n            \"title\": \"Plan Item\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-07-31T12:13:21.373Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Plan Appliance Item fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_appliance_item.routes.js",
    "groupTitle": "Plan_Appliance_Items",
    "name": "GetAdminPlanApplianceItemList"
  },
  {
    "type": "post",
    "url": "/admin/plan-appliance-item/add",
    "title": "Plan Appliance Items Add",
    "version": "1.0.0",
    "group": "Plan_Appliance_Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Item Name</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "covered_list",
            "description": "<p>What is covered</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "not_covered_list",
            "description": "<p>What is covered</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "highlight",
            "description": "<p>Coverage highlight</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "note",
            "description": "<p>Important Note</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "coverage_limit",
            "description": "<p>Coverage limit</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f240ae16382e747e9530081\",\n        \"createdAt\": \"2020-07-31T12:13:21.373Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Appliance Item Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_appliance_item.routes.js",
    "groupTitle": "Plan_Appliance_Items",
    "name": "PostAdminPlanApplianceItemAdd"
  },
  {
    "type": "post",
    "url": "/admin/plan-appliance-item/delete",
    "title": "Plan Appliance Item Delete",
    "version": "1.0.0",
    "group": "Plan_Appliance_Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_appliance_item_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5f240ae16382e747e9530081\",\n        \"createdAt\": \"2020-07-31T12:13:21.373Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Appliance Item Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_appliance_item.routes.js",
    "groupTitle": "Plan_Appliance_Items",
    "name": "PostAdminPlanApplianceItemDelete"
  },
  {
    "type": "put",
    "url": "/admin/plan-appliance-item/update",
    "title": "Plan Appliance Items Update",
    "version": "1.0.0",
    "group": "Plan_Appliance_Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_appliance_item_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Item Name</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "price",
            "description": "<p>Item Price</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "covered_list",
            "description": "<p>What is covered</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "not_covered_list",
            "description": "<p>What is covered</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "highlight",
            "description": "<p>Coverage highlight</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "note",
            "description": "<p>Important Note</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "coverage_limit",
            "description": "<p>Coverage limit</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f240ae16382e747e9530081\",\n        \"createdAt\": \"2020-07-31T12:13:21.373Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Appliance Item Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_appliance_item.routes.js",
    "groupTitle": "Plan_Appliance_Items",
    "name": "PutAdminPlanApplianceItemUpdate"
  },
  {
    "type": "get",
    "url": "/admin/plan-category/:id",
    "title": "Category details",
    "version": "1.0.0",
    "group": "Plan_Category",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f23f300e58e393af84da430\",\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan category fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_category.routes.js",
    "groupTitle": "Plan_Category",
    "name": "GetAdminPlanCategoryId"
  },
  {
    "type": "get",
    "url": "/admin/plan-category/list",
    "title": "Category list",
    "version": "1.0.0",
    "group": "Plan_Category",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f23f300e58e393af84da430\",\n            \"title\": \"Duplex\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Plan category fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_category.routes.js",
    "groupTitle": "Plan_Category",
    "name": "GetAdminPlanCategoryList"
  },
  {
    "type": "get",
    "url": "/admin/plan-category/optional",
    "title": "Plan Category optional",
    "version": "1.0.0",
    "group": "Plan_Category",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f23f300e58e393af84da430\",\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan category fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_category.routes.js",
    "groupTitle": "Plan_Category",
    "name": "GetAdminPlanCategoryOptional"
  },
  {
    "type": "post",
    "url": "/admin/plan-category/add",
    "title": "Category Add",
    "version": "1.0.0",
    "group": "Plan_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "maximum_category_coverage",
            "description": "<p>Maximum Category Coverage</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "maximum_category_coverage_increase",
            "description": "<p>Maximum Category Coverage Increase</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "maximum_category_coverage_decrase",
            "description": "<p>Maximum Category Coverage Decrease</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f23f300e58e393af84da430\",\n        \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan category Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_category.routes.js",
    "groupTitle": "Plan_Category",
    "name": "PostAdminPlanCategoryAdd"
  },
  {
    "type": "post",
    "url": "/admin/plan-category/delete",
    "title": "Category Delete",
    "version": "1.0.0",
    "group": "Plan_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_category_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5f23efe73fc11c398948156e\",\n        \"createdAt\": \"2020-07-31T10:18:15.895Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan category Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_category.routes.js",
    "groupTitle": "Plan_Category",
    "name": "PostAdminPlanCategoryDelete"
  },
  {
    "type": "put",
    "url": "/admin/plan-category/update",
    "title": "Category Update",
    "version": "1.0.0",
    "group": "Plan_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_category_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "maximum_category_coverage",
            "description": "<p>Maximum Category Coverage</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "maximum_category_coverage_increase",
            "description": "<p>Maximum Category Coverage Increase</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "maximum_category_coverage_decrase",
            "description": "<p>Maximum Category Coverage Decrease</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f23f300e58e393af84da430\",\n        \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan category Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_category.routes.js",
    "groupTitle": "Plan_Category",
    "name": "PutAdminPlanCategoryUpdate"
  },
  {
    "type": "get",
    "url": "/admin/plan-covered-item/:id",
    "title": "Plan Covered Item details",
    "version": "1.0.0",
    "group": "Plan_Covered_Items",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f240ae16382e747e9530081\",\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-31T12:13:21.373Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Covered Item fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_covered_item.routes.js",
    "groupTitle": "Plan_Covered_Items",
    "name": "GetAdminPlanCoveredItemId"
  },
  {
    "type": "get",
    "url": "/admin/plan-covered-item/list",
    "title": "Plan Covered list",
    "version": "1.0.0",
    "group": "Plan_Covered_Items",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f240ae16382e747e9530081\",\n            \"title\": \"Plan Item\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-07-31T12:13:21.373Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Plan Covered Item fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_covered_item.routes.js",
    "groupTitle": "Plan_Covered_Items",
    "name": "GetAdminPlanCoveredItemList"
  },
  {
    "type": "post",
    "url": "/admin/plan-covered-item/add",
    "title": "Plan Covered Items Add",
    "version": "1.0.0",
    "group": "Plan_Covered_Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Item Name</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "covered_list",
            "description": "<p>What is covered</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "not_covered_list",
            "description": "<p>What is covered</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "highlight",
            "description": "<p>Coverage highlight</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "note",
            "description": "<p>Important Note</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "coverage_limit",
            "description": "<p>Coverage limit</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f240ae16382e747e9530081\",\n        \"createdAt\": \"2020-07-31T12:13:21.373Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Covered Item Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_covered_item.routes.js",
    "groupTitle": "Plan_Covered_Items",
    "name": "PostAdminPlanCoveredItemAdd"
  },
  {
    "type": "post",
    "url": "/admin/plan-covered-item/bulk-status-change",
    "title": "Plan Covered Item Bulk Status Change",
    "version": "1.0.0",
    "group": "Plan_Covered_Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_covered_item_id",
            "description": "<p>[&quot;5ed783c7a3ffce0e11723ba5&quot;,&quot;5ed783c7a3ffce0e11723ba5&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f240ae16382e747e9530081\",\n        \"createdAt\": \"2020-07-31T12:13:21.373Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Covered Item status Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_covered_item.routes.js",
    "groupTitle": "Plan_Covered_Items",
    "name": "PostAdminPlanCoveredItemBulkStatusChange"
  },
  {
    "type": "post",
    "url": "/admin/plan-covered-item/delete",
    "title": "Plan Covered Item Delete",
    "version": "1.0.0",
    "group": "Plan_Covered_Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_covered_item_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5f240ae16382e747e9530081\",\n        \"createdAt\": \"2020-07-31T12:13:21.373Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Covered Item Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_covered_item.routes.js",
    "groupTitle": "Plan_Covered_Items",
    "name": "PostAdminPlanCoveredItemDelete"
  },
  {
    "type": "put",
    "url": "/admin/plan-covered-item/update",
    "title": "Plan Covered Items Update",
    "version": "1.0.0",
    "group": "Plan_Covered_Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_covered_item_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Item Name</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "covered_list",
            "description": "<p>What is covered</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "not_covered_list",
            "description": "<p>What is covered</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "highlight",
            "description": "<p>Coverage highlight</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "note",
            "description": "<p>Important Note</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "coverage_limit",
            "description": "<p>Coverage limit</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f240ae16382e747e9530081\",\n        \"createdAt\": \"2020-07-31T12:13:21.373Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Covered Item Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_covered_item.routes.js",
    "groupTitle": "Plan_Covered_Items",
    "name": "PutAdminPlanCoveredItemUpdate"
  },
  {
    "type": "get",
    "url": "/admin/plan-property-size/:id",
    "title": "Plan Property Size details",
    "version": "1.0.0",
    "group": "Plan_Property_Size",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f23f300e58e393af84da430\",\n        \"title\": \"Up to 2,500 Square Feet\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Property Size fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_property_size.routes.js",
    "groupTitle": "Plan_Property_Size",
    "name": "GetAdminPlanPropertySizeId"
  },
  {
    "type": "get",
    "url": "/admin/plan-property-size/list",
    "title": "Property Size list",
    "version": "1.0.0",
    "group": "Plan_Property_Size",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f23f300e58e393af84da430\",\n            \"title\": \"Up to 2,500 Square Feet\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Plan Property Size fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_property_size.routes.js",
    "groupTitle": "Plan_Property_Size",
    "name": "GetAdminPlanPropertySizeList"
  },
  {
    "type": "post",
    "url": "/admin/plan-property-size/add",
    "title": "Property Size Add",
    "version": "1.0.0",
    "group": "Plan_Property_Size",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Up to 2,500 Square Feet\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f23f300e58e393af84da430\",\n        \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Property Size Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_property_size.routes.js",
    "groupTitle": "Plan_Property_Size",
    "name": "PostAdminPlanPropertySizeAdd"
  },
  {
    "type": "post",
    "url": "/admin/plan-property-size/delete",
    "title": "Plan Property Size Delete",
    "version": "1.0.0",
    "group": "Plan_Property_Size",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_property_size_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Up to 2,500 Square Feet\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5f23efe73fc11c398948156e\",\n        \"createdAt\": \"2020-07-31T10:18:15.895Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Property Size Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_property_size.routes.js",
    "groupTitle": "Plan_Property_Size",
    "name": "PostAdminPlanPropertySizeDelete"
  },
  {
    "type": "put",
    "url": "/admin/plan-property-size/update",
    "title": "Property Size Update",
    "version": "1.0.0",
    "group": "Plan_Property_Size",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_property_size_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Up to 2,500 Square Feet\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f23f300e58e393af84da430\",\n        \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Property Size Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_property_size.routes.js",
    "groupTitle": "Plan_Property_Size",
    "name": "PutAdminPlanPropertySizeUpdate"
  },
  {
    "type": "get",
    "url": "/admin/plan-property-type/:id",
    "title": "Plan Property Type details",
    "version": "1.0.0",
    "group": "Plan_Property_Type",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f23f300e58e393af84da430\",\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Property Type fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_property_type.routes.js",
    "groupTitle": "Plan_Property_Type",
    "name": "GetAdminPlanPropertyTypeId"
  },
  {
    "type": "get",
    "url": "/admin/plan-property-type/list",
    "title": "Property Type list",
    "version": "1.0.0",
    "group": "Plan_Property_Type",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f23f300e58e393af84da430\",\n            \"title\": \"Duplex\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Plan Property Type fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_property_type.routes.js",
    "groupTitle": "Plan_Property_Type",
    "name": "GetAdminPlanPropertyTypeList"
  },
  {
    "type": "post",
    "url": "/admin/plan-property-type/add",
    "title": "Property Type Add",
    "version": "1.0.0",
    "group": "Plan_Property_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f23f300e58e393af84da430\",\n        \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Property Type Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_property_type.routes.js",
    "groupTitle": "Plan_Property_Type",
    "name": "PostAdminPlanPropertyTypeAdd"
  },
  {
    "type": "post",
    "url": "/admin/plan-property-type/delete",
    "title": "Plan Property Type Delete",
    "version": "1.0.0",
    "group": "Plan_Property_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_property_type_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5f23efe73fc11c398948156e\",\n        \"createdAt\": \"2020-07-31T10:18:15.895Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Property Type Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_property_type.routes.js",
    "groupTitle": "Plan_Property_Type",
    "name": "PostAdminPlanPropertyTypeDelete"
  },
  {
    "type": "put",
    "url": "/admin/plan-property-type/update",
    "title": "Property Type Update",
    "version": "1.0.0",
    "group": "Plan_Property_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_property_type_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Duplex\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f23f300e58e393af84da430\",\n        \"createdAt\": \"2020-07-31T10:31:28.148Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Plan Property Type Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/plan_property_type.routes.js",
    "groupTitle": "Plan_Property_Type",
    "name": "PutAdminPlanPropertyTypeUpdate"
  },
  {
    "type": "get",
    "url": "/admin/property-type/:id",
    "title": "Property Type details",
    "version": "1.0.0",
    "group": "Property_Type",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n        \"title\": \"Apartment\",\n        \"description\": \"test apartment\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Property Type fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/property_type.routes.js",
    "groupTitle": "Property_Type",
    "name": "GetAdminPropertyTypeId"
  },
  {
    "type": "get",
    "url": "/admin/property-type/list",
    "title": "Property Type list",
    "version": "1.0.0",
    "group": "Property_Type",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n            \"title\": \"Apartment\",\n            \"description\": \"test apartment\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ed783f654f8b50e2170bb1a\",\n            \"title\": \"Apartment1\",\n            \"description\": \"test apartment1\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-03T11:05:26.558Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Property Type fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/property_type.routes.js",
    "groupTitle": "Property_Type",
    "name": "GetAdminPropertyTypeList"
  },
  {
    "type": "post",
    "url": "/admin/property-type/add",
    "title": "Property Type Add",
    "version": "1.0.0",
    "group": "Property_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Apartment\",\n        \"description\": \"test apartment\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n        \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Property Type Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/property_type.routes.js",
    "groupTitle": "Property_Type",
    "name": "PostAdminPropertyTypeAdd"
  },
  {
    "type": "post",
    "url": "/admin/property-type/delete",
    "title": "Property Type Delete",
    "version": "1.0.0",
    "group": "Property_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_type_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n       \"title\": \"Apartment01\",\n        \"description\": \"test apartment1\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n        \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Property Type Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/property_type.routes.js",
    "groupTitle": "Property_Type",
    "name": "PostAdminPropertyTypeDelete"
  },
  {
    "type": "put",
    "url": "/admin/property-type/update",
    "title": "Property Type Edit",
    "version": "1.0.0",
    "group": "Property_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_type_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Apartment01\",\n        \"description\": \"test apartment1\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n        \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Property Type Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/property_type.routes.js",
    "groupTitle": "Property_Type",
    "name": "PutAdminPropertyTypeUpdate"
  },
  {
    "type": "post",
    "url": "/admin/question_answer/add",
    "title": "Question Answer Add",
    "version": "1.0.0",
    "group": "Question_Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "question",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "answer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "question_answer_tab_id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n        \"data\": {\n            \"question\": \"Home1\",\n            \"answer\": \"THis is tset answer\",\n            \"question_answer_tab_id\": \"5f3bb100943028220a8fd801\",\n            \"isDeleted\": false,\n            \"status\": \"Active\",\n            \"_id\": \"5f3be6c0ad1f2e3a94eda4a9\",\n            \"createdAt\": \"2020-08-18T14:33:36.933Z\",\n            \"updatedAt\": \"2020-08-18T14:33:36.933Z\"\n        },\n        \"message\": \"Question Answer Created successfully\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/question_answer.routes.js",
    "groupTitle": "Question_Answer",
    "name": "PostAdminQuestion_answerAdd"
  },
  {
    "type": "post",
    "url": "/admin/question_answer/delete",
    "title": "Plan Delete",
    "version": "1.0.0",
    "group": "Question_Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Question Answer _id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n        \"data\": {\n            \"question\": \"Home2\",\n            \"answer\": \"THis is tset answer\",\n            \"question_answer_tab_id\": \"5f3bb100943028220a8fd801\",\n            \"isDeleted\": true,\n            \"status\": \"Active\",\n            \"_id\": \"5f3be6c0ad1f2e3a94eda4a9\",\n            \"createdAt\": \"2020-08-18T14:33:36.933Z\",\n            \"updatedAt\": \"2020-08-18T15:38:37.924Z\"\n        },\n        \"message\": \"Deleted Successfully\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/question_answer.routes.js",
    "groupTitle": "Question_Answer",
    "name": "PostAdminQuestion_answerDelete"
  },
  {
    "type": "post",
    "url": "/admin//question_answer/list",
    "title": "question_answer list with tab",
    "version": "1.0.0",
    "group": "Question_Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "question_answer_tab_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n           {\n               \"_id\": \"5f3be6c0ad1f2e3a94eda4a9\",\n               \"question\": \"Home1\",\n               \"answer\": \"THis is tset answer\",\n               \"isDeleted\": false\n           }\n       ],\n       \"message\": \"Data fetched Successfully\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/question_answer.routes.js",
    "groupTitle": "Question_Answer",
    "name": "PostAdminQuestion_answerList"
  },
  {
    "type": "post",
    "url": "/admin//question_answer_tab/list",
    "title": "question_answer_tab list",
    "version": "1.0.0",
    "group": "Question_Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plan_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f3bb100943028220a8fd801\",\n            \"name\": \"Home1\",\n            \"plan_id\": \"5f2a8290511b0708685afbe6\",\n            \"isDeleted\": false,\n            \"type\": \"plan\"\n        }\n    ],\n    \"message\": \"Data fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/question_answer_tab.routes.js",
    "groupTitle": "Question_Answer",
    "name": "PostAdminQuestion_answer_tabList"
  },
  {
    "type": "put",
    "url": "/admin/question_answer/update",
    "title": "Question Answer Edit",
    "version": "1.0.0",
    "group": "Question_Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "question",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "answer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "question_answer_tab_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Question Answer _id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n       \"data\": {\n           \"question\": \"Home2\",\n           \"answer\": \"THis is tset answer\",\n           \"question_answer_tab_id\": \"5f3bb100943028220a8fd801\",\n           \"isDeleted\": false,\n           \"status\": \"Active\",\n           \"_id\": \"5f3be6c0ad1f2e3a94eda4a9\",\n           \"createdAt\": \"2020-08-18T14:33:36.933Z\",\n           \"updatedAt\": \"2020-08-18T15:31:47.432Z\"\n       },\n       \"message\": \"Quesetion Answer Updated Successfully\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/question_answer.routes.js",
    "groupTitle": "Question_Answer",
    "name": "PutAdminQuestion_answerUpdate"
  },
  {
    "type": "get",
    "url": "/admin/request-service/:id",
    "title": "Request Service details",
    "version": "1.0.0",
    "group": "Request_Service",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5ef09d7c2878440912566b60\",\n        \"title\": \"Sewage Lines\",\n        \"parent_id\": \"5ef09d502878440912566b5f\",\n        \"description\": \"Sewage Lines\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-06-22T12:01:00.900Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Request service fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/request_service.routes.js",
    "groupTitle": "Request_Service",
    "name": "GetAdminRequestServiceId"
  },
  {
    "type": "get",
    "url": "/admin/request-service/list",
    "title": "Request Service list",
    "version": "1.0.0",
    "group": "Request_Service",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n       {\n            \"_id\": \"5ef095882878440912566b16\",\n            \"title\": \"Air Conditioning and Heating\",\n            \"parent_id\": null,\n            \"description\": \"Air Conditioning and Heating\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-22T11:27:04.061Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ef095a82878440912566b17\",\n            \"title\": \"HVAC System\",\n            \"parent_id\": \"5ef095882878440912566b16\",\n            \"description\": \"HVAC System\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-22T11:27:36.567Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Request service fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/request_service.routes.js",
    "groupTitle": "Request_Service",
    "name": "GetAdminRequestServiceList"
  },
  {
    "type": "get",
    "url": "/admin/request-service/parent-list",
    "title": "Request Service parent list",
    "version": "1.0.0",
    "group": "Request_Service",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5ef095882878440912566b16\",\n            \"title\": \"Air Conditioning and Heating\",\n            \"parent_id\": null,\n            \"description\": \"Air Conditioning and Heating\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-22T11:27:04.061Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ef096312878440912566b1c\",\n            \"title\": \"Heating\",\n            \"parent_id\": null,\n            \"description\": \"Heating\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-22T11:29:53.207Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ef098102878440912566b27\",\n            \"title\": \"Appliances\",\n            \"parent_id\": null,\n            \"description\": \"Appliances\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-22T11:37:52.131Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ef09a082878440912566b35\",\n            \"title\": \"ELECTRICAL\",\n            \"parent_id\": null,\n            \"description\": \"ELECTRICAL\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-22T11:46:16.373Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ef09aa62878440912566b3d\",\n            \"title\": \"PLUMBING\",\n            \"parent_id\": null,\n            \"description\": \"PLUMBING\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-22T11:48:54.627Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ef09bd52878440912566b4c\",\n            \"title\": \"PLUMBING FIXTURES\",\n            \"parent_id\": null,\n            \"description\": \"PLUMBING FIXTURES\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-22T11:53:57.928Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ef09c322878440912566b51\",\n            \"title\": \"POOL\",\n            \"parent_id\": null,\n            \"description\": \"POOL\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-22T11:55:30.627Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ef09cc12878440912566b58\",\n            \"title\": \"SPA\",\n            \"parent_id\": null,\n            \"description\": \"SPA\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-22T11:57:53.205Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ef09d502878440912566b5f\",\n            \"title\": \"SEWEGE LINES\",\n            \"parent_id\": null,\n            \"description\": \"SEWEGE LINES\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-22T12:00:16.451Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Request service parent fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/request_service.routes.js",
    "groupTitle": "Request_Service",
    "name": "GetAdminRequestServiceParentList"
  },
  {
    "type": "post",
    "url": "/admin/request-service/add",
    "title": "Request Service Add",
    "version": "1.0.0",
    "group": "Request_Service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Parent Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Sewage Lines\",\n        \"parent_id\": \"5ef09d502878440912566b5f\",\n        \"description\": \"Sewage Lines\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5ef09d7c2878440912566b60\",\n        \"createdAt\": \"2020-06-22T12:01:00.900Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Request service Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/request_service.routes.js",
    "groupTitle": "Request_Service",
    "name": "PostAdminRequestServiceAdd"
  },
  {
    "type": "post",
    "url": "/admin/request-service/delete",
    "title": "Request Service Delete",
    "version": "1.0.0",
    "group": "Request_Service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "request_service_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Sewage Lines1\",\n        \"parent_id\": \"5ef09d502878440912566b5f\",\n        \"description\": \"Sewage Lines\",\n        \"status\": \"Inactive\",\n        \"isDeleted\": true,\n        \"_id\": \"5ef09d7c2878440912566b60\",\n        \"createdAt\": \"2020-06-22T12:01:00.900Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Request service Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/request_service.routes.js",
    "groupTitle": "Request_Service",
    "name": "PostAdminRequestServiceDelete"
  },
  {
    "type": "post",
    "url": "/admin/request-service/status-change",
    "title": "Request Service Status Change",
    "version": "1.0.0",
    "group": "Request_Service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "request_service_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Sewage Lines1\",\n        \"parent_id\": \"5ef09d502878440912566b5f\",\n        \"description\": \"Sewage Lines\",\n        \"status\": \"Inactive\",\n        \"isDeleted\": false,\n        \"_id\": \"5ef09d7c2878440912566b60\",\n        \"createdAt\": \"2020-06-22T12:01:00.900Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Request service status has changed successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/request_service.routes.js",
    "groupTitle": "Request_Service",
    "name": "PostAdminRequestServiceStatusChange"
  },
  {
    "type": "put",
    "url": "/admin/request-service/update",
    "title": "Request Service Edit",
    "version": "1.0.0",
    "group": "Request_Service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "request_service_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Parent Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"Sewage Lines1\",\n        \"parent_id\": \"5ef09d502878440912566b5f\",\n        \"description\": \"Sewage Lines\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5ef09d7c2878440912566b60\",\n        \"createdAt\": \"2020-06-22T12:01:00.900Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Request service Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/request_service.routes.js",
    "groupTitle": "Request_Service",
    "name": "PutAdminRequestServiceUpdate"
  },
  {
    "type": "get",
    "url": "/admin/role/list",
    "title": "Role List",
    "version": "1.0.0",
    "group": "Role",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"status\": 200,\n  \"data\": [\n    {\n      \"_id\": \"5c87651bdc38e258156b0bf3\",\n      \"role\": \"admin\",\n      \"desc\": \"<p>This is the Admin role here.</p>\\r\\n\",\n      \"roleDisplayName\": \"Admin\"\n    },\n    {\n      \"_id\": \"5cc0427b9c4c3ac9c47b2579\",\n      \"role\": \"user\",\n      \"desc\": \"<p>This is the user role here.</p>\\r\\n\",\n      \"roleDisplayName\": \"user\"\n    }\n  ],\n  \"message\": \"Roles fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/role.routes.js",
    "groupTitle": "Role",
    "name": "GetAdminRoleList"
  },
  {
    "type": "get",
    "url": "/admin/service-issue/:id",
    "title": "Service issue details",
    "version": "1.0.0",
    "group": "Service_Issue",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5ef0daef22b99a1232cefd52\",\n        \"service_id\": \"5ef095c72878440912566b18\",\n        \"content\": \"Test\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-06-22T16:23:11.992Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Request service issue fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/service_issue.routes.js",
    "groupTitle": "Service_Issue",
    "name": "GetAdminServiceIssueId"
  },
  {
    "type": "get",
    "url": "/admin/service-issue/list/:serviceId",
    "title": "Service issue list",
    "version": "1.0.0",
    "group": "Service_Issue",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5ef095c72878440912566b18\",\n            \"title\": \"Air Conditioning\",\n            \"service_issues\": [\n                {\n                    \"_id\": \"5ef0daef22b99a1232cefd52\",\n                    \"service_id\": \"5ef095c72878440912566b18\",\n                    \"content\": \"Test\",\n                    \"status\": \"Active\",\n                    \"isDeleted\": false,\n                    \"createdAt\": \"2020-06-22T16:23:11.992Z\",\n                    \"__v\": 0\n                },\n                {\n                    \"_id\": \"5ef0db621ab27e0a6da3ee43\",\n                    \"service_id\": \"5ef095c72878440912566b18\",\n                    \"content\": \"Test two\",\n                    \"status\": \"Active\",\n                    \"isDeleted\": false,\n                    \"createdAt\": \"2020-06-22T16:23:11.992Z\",\n                    \"__v\": 0\n                }\n            ]\n        }\n    ],\n    \"message\": \"Request service issue fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/service_issue.routes.js",
    "groupTitle": "Service_Issue",
    "name": "GetAdminServiceIssueListServiceid"
  },
  {
    "type": "post",
    "url": "/admin/service-issue/add",
    "title": "Service issue Add",
    "version": "1.0.0",
    "group": "Service_Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_id",
            "description": "<p>Service Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"service_id\": \"5ef095c72878440912566b18\",\n        \"content\": \"Test\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5ef0daef22b99a1232cefd52\",\n        \"createdAt\": \"2020-06-22T16:23:11.992Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Request service issue created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/service_issue.routes.js",
    "groupTitle": "Service_Issue",
    "name": "PostAdminServiceIssueAdd"
  },
  {
    "type": "post",
    "url": "/admin/service-issue/delete",
    "title": "Service issue Delete",
    "version": "1.0.0",
    "group": "Service_Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issue_id",
            "description": "<p>Service Issue Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"service_id\": \"5ef095c72878440912566b18\",\n        \"content\": \"Test1234\",\n        \"status\": \"Inactive\",\n        \"isDeleted\": true,\n        \"_id\": \"5ef0daef22b99a1232cefd52\",\n        \"createdAt\": \"2020-06-22T16:23:11.992Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Request service issue Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/service_issue.routes.js",
    "groupTitle": "Service_Issue",
    "name": "PostAdminServiceIssueDelete"
  },
  {
    "type": "post",
    "url": "/admin/service-issue/status-change",
    "title": "Service issue Status Change",
    "version": "1.0.0",
    "group": "Service_Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issue_id",
            "description": "<p>Service Issue Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"service_id\": \"5ef095c72878440912566b18\",\n        \"content\": \"Test1234\",\n        \"status\": \"Inactive\",\n        \"isDeleted\": false,\n        \"_id\": \"5ef0daef22b99a1232cefd52\",\n        \"createdAt\": \"2020-06-22T16:23:11.992Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Request service issue status has changed successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/service_issue.routes.js",
    "groupTitle": "Service_Issue",
    "name": "PostAdminServiceIssueStatusChange"
  },
  {
    "type": "put",
    "url": "/admin/service-issue/update",
    "title": "Service issue Edit",
    "version": "1.0.0",
    "group": "Service_Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issue_id",
            "description": "<p>Service Issue Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"service_id\": \"5ef095c72878440912566b18\",\n        \"content\": \"Test1234\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5ef0daef22b99a1232cefd52\",\n        \"createdAt\": \"2020-06-22T16:23:11.992Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Request service issue has updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/service_issue.routes.js",
    "groupTitle": "Service_Issue",
    "name": "PutAdminServiceIssueUpdate"
  },
  {
    "type": "get",
    "url": "/admin/state/:id",
    "title": "State details",
    "version": "1.0.0",
    "group": "State",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n        \"title\": \"State One\",\n        \"abbreviation\":\"AB\",\n        \"type\": \"cover\",\n        \"orderNumber\": 1,\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n        \"__v\": 0\n    },\n    \"message\": \"State fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state.routes.js",
    "groupTitle": "State",
    "name": "GetAdminStateId"
  },
  {
    "type": "get",
    "url": "/admin/state/list",
    "title": "State list",
    "version": "1.0.0",
    "group": "State",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n            \"title\": \"State One\",\n            \"abbreviation\":\"AB\",\n            \"type\": \"cover\",\n            \"orderNumber\": 1,\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ed783f654f8b50e2170bb1a\",\n            \"title\": \"State Two\",\n            \"abbreviation\":\"CD\",\n            \"type\": \"processing\",\n            \"orderNumber\": 2,\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-03T11:05:26.558Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"State fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state.routes.js",
    "groupTitle": "State",
    "name": "GetAdminStateList"
  },
  {
    "type": "post",
    "url": "/admin/state/add",
    "title": "State Add",
    "version": "1.0.0",
    "group": "State",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "abbreviation",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>[&quot;cover&quot;, &quot;processing&quot;,&quot;not_covered&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n        \"title\": \"State One\",\n        \"abbreviation\":\"AB\",\n        \"type\": \"cover\",\n        \"orderNumber\": 1,\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n        \"__v\": 0\n    },\n    \"message\": \"State Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state.routes.js",
    "groupTitle": "State",
    "name": "PostAdminStateAdd"
  },
  {
    "type": "post",
    "url": "/admin/state/bulk-status-change",
    "title": "State Bulk Status Change",
    "version": "1.0.0",
    "group": "State",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state_id",
            "description": "<p>[&quot;5ed783c7a3ffce0e11723ba5&quot;,&quot;5ed783c7a3ffce0e11723ba5&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n        \"title\": \"State One\",\n        \"abbreviation\":\"AB\",\n        \"type\": \"cover\",\n        \"orderNumber\": 1,\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n        \"__v\": 0\n    },\n    \"message\": \"State Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state.routes.js",
    "groupTitle": "State",
    "name": "PostAdminStateBulkStatusChange"
  },
  {
    "type": "post",
    "url": "/admin/state/delete",
    "title": "State Delete",
    "version": "1.0.0",
    "group": "State",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n        \"title\": \"State One\",\n        \"abbreviation\":\"AB\",\n        \"type\": \"cover\",\n        \"orderNumber\": 1,\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n        \"__v\": 0\n    },\n    \"message\": \"State Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state.routes.js",
    "groupTitle": "State",
    "name": "PostAdminStateDelete"
  },
  {
    "type": "put",
    "url": "/admin/state/update",
    "title": "State Edit",
    "version": "1.0.0",
    "group": "State",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "abbreviation",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>[&quot;cover&quot;, &quot;processing&quot;,&quot;not_covered&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5ed783c7a3ffce0e11723ba5\",\n        \"title\": \"State One\",\n        \"abbreviation\":\"AB\",\n        \"type\": \"cover\",\n        \"orderNumber\": 1,\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-06-03T11:04:39.393Z\",\n        \"__v\": 0\n    },\n    \"message\": \"State Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state.routes.js",
    "groupTitle": "State",
    "name": "PutAdminStateUpdate"
  },
  {
    "type": "get",
    "url": "/admin/state-article/:id",
    "title": "State article details",
    "version": "1.0.0",
    "group": "State_article",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5f215894de74170eca386a76\",\n        \"state_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"section\": \"Section Two\",\n        \"identity\": \"section_two\",\n        \"title\": \"tetetdddd\",\n        \"banner_image\": \"ddd\",\n        \"image_one\": \"\",\n        \"image_two\": \"\",\n        \"content_one\": \"fddddff\",\n        \"content_two\": \"\",\n        \"content_three\": \"\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-07-29T11:08:04.806Z\",\n        \"__v\": 0,\n        \"state\": {\n            \"_id\": \"5f214f8e76f1b0d911dadc9f\",\n            \"title\": \"abc\",\n            \"type\": \"processing\",\n            \"orderNumber\": 0,\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-07-29T10:29:34.018Z\",\n            \"__v\": 0\n        }\n    },\n    \"message\": \"State article fetched Successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state_article.routes.js",
    "groupTitle": "State_article",
    "name": "GetAdminStateArticleId"
  },
  {
    "type": "get",
    "url": "/admin/state-article/image/list",
    "title": "State article image list",
    "version": "1.0.0",
    "group": "State_article",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f215894de74170eca386a76\",\n            \"section\": \"Section Two\"\n        }\n    ],\n    \"state\": {\n        \"_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"title\": \"abc\"\n    },\n    \"message\": \"State article section fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state_article.routes.js",
    "groupTitle": "State_article",
    "name": "GetAdminStateArticleImageList"
  },
  {
    "type": "get",
    "url": "/admin/state-article/section/list/:stateId",
    "title": "State article section list",
    "version": "1.0.0",
    "group": "State_article",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f215894de74170eca386a76\",\n            \"section\": \"Section Two\"\n        }\n    ],\n    \"state\": {\n        \"_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"title\": \"abc\"\n    },\n    \"message\": \"State article section fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state_article.routes.js",
    "groupTitle": "State_article",
    "name": "GetAdminStateArticleSectionListStateid"
  },
  {
    "type": "post",
    "url": "/admin/state-article/add",
    "title": "State article Add",
    "version": "1.0.0",
    "group": "State_article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "state_id",
            "description": "<p>State Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "banner_image",
            "description": "<p>Banner image for Sectiion One</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_one",
            "description": "<p>Image One</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_two",
            "description": "<p>Image Two</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_one",
            "description": "<p>Content One</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_two",
            "description": "<p>Content Two</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_three",
            "description": "<p>Content Three</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meta_title",
            "description": "<p>Meta Title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meta_description",
            "description": "<p>Meta Description</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"state_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"section\": \"Section Two\",\n        \"identity\": \"section_two\",\n        \"title\": \"test here\",\n        \"banner_image\": \"ddd\",\n        \"image_one\": \"\",\n        \"image_two\": \"\",\n        \"content_one\": \"fddddff\",\n        \"content_two\": \"\",\n        \"content_three\": \"\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f215894de74170eca386a76\",\n        \"createdAt\": \"2020-07-29T11:08:04.806Z\",\n        \"__v\": 0\n    },\n    \"message\": \"State article Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state_article.routes.js",
    "groupTitle": "State_article",
    "name": "PostAdminStateArticleAdd"
  },
  {
    "type": "post",
    "url": "/admin/state-article/delete",
    "title": "State article delete",
    "version": "1.0.0",
    "group": "State_article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "article_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"state_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"section\": \"Section Two\",\n        \"identity\": \"section_two\",\n        \"title\": \"tetetdddd\",\n        \"banner_image\": \"ddd\",\n        \"image_one\": \"\",\n        \"image_two\": \"\",\n        \"content_one\": \"fddddff\",\n        \"content_two\": \"\",\n        \"content_three\": \"\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5f215894de74170eca386a76\",\n        \"createdAt\": \"2020-07-29T11:08:04.806Z\",\n        \"__v\": 0\n    },\n    \"message\": \"State article Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state_article.routes.js",
    "groupTitle": "State_article",
    "name": "PostAdminStateArticleDelete"
  },
  {
    "type": "post",
    "url": "/admin/state-article/image-add",
    "title": "State article image Add",
    "version": "1.0.0",
    "group": "State_article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "elite_appliances_image",
            "description": "<p>Elite appliances image</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "elite_systems_image",
            "description": "<p>Elite systems image</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "elite_complete_image",
            "description": "<p>Elite complete image</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "elite_electronics_image",
            "description": "<p>Elite electronics image</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "elite_sewer_image",
            "description": "<p>Elite sewer image</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "customize_own_image",
            "description": "<p>Customize your own image</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"state_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"section\": \"Section Two\",\n        \"identity\": \"section_two\",\n        \"title\": \"test here\",\n        \"banner_image\": \"ddd\",\n        \"image_one\": \"\",\n        \"image_two\": \"\",\n        \"content_one\": \"fddddff\",\n        \"content_two\": \"\",\n        \"content_three\": \"\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f215894de74170eca386a76\",\n        \"createdAt\": \"2020-07-29T11:08:04.806Z\",\n        \"__v\": 0\n    },\n    \"message\": \"State article Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state_article.routes.js",
    "groupTitle": "State_article",
    "name": "PostAdminStateArticleImageAdd"
  },
  {
    "type": "put",
    "url": "/admin/state-article/image-update",
    "title": "State article image edit",
    "version": "1.0.0",
    "group": "State_article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "elite_appliances_image",
            "description": "<p>Elite appliances image</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "elite_systems_image",
            "description": "<p>Elite systems image</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "elite_complete_image",
            "description": "<p>Elite complete image</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "elite_electronics_image",
            "description": "<p>Elite electronics image</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "elite_sewer_image",
            "description": "<p>Elite sewer image</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "customize_own_image",
            "description": "<p>Customize your own image</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"state_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"section\": \"Section Two\",\n        \"identity\": \"section_two\",\n        \"title\": \"tetetdddd\",\n        \"banner_image\": \"ddd\",\n        \"image_one\": \"\",\n        \"image_two\": \"\",\n        \"content_one\": \"fddddff\",\n        \"content_two\": \"\",\n        \"content_three\": \"\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f215894de74170eca386a76\",\n        \"createdAt\": \"2020-07-29T11:08:04.806Z\",\n        \"__v\": 0\n    },\n    \"message\": \"State article Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state_article.routes.js",
    "groupTitle": "State_article",
    "name": "PutAdminStateArticleImageUpdate"
  },
  {
    "type": "put",
    "url": "/admin/state-article/update",
    "title": "State article edit",
    "version": "1.0.0",
    "group": "State_article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "article_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state_id",
            "description": "<p>State Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "section_one",
            "description": "<p>{section1_image1:'1.jpg',title_one:'titlteone',content_one:'test'} Section One</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "section_two",
            "description": "<p>{section2_image1:'1.jpg',section1_image2:'2.jpg',title_one:'titlteone',title_two:'titltetwo',content_one:'test',content_two:'test'} Section Two</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "section_three",
            "description": "<p>{section3_image1:'1.jpg',title_one:'titlteone',content_one:'test',content_two:'test',content_three:'test'} Section Three</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "section_four",
            "description": "<p>{content_one:'test',content_two:'test',content_three:'test',content_four:'test',content_five:'test',content_six:'test'} Section Four</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "section_five",
            "description": "<p>{section5_image1:'1.jpg',title_one:'titlteone',content_one:'test',content_two:'test',content_three:'test'} Section Five</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "section_six",
            "description": "<p>{section6_image1:'1.jpg',title_one:'titlteone',content_one:'test',content_two:'test',content_three:'test'} Section Six</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"state_id\": \"5f214f8e76f1b0d911dadc9f\",\n        \"section\": \"Section Two\",\n        \"identity\": \"section_two\",\n        \"title\": \"tetetdddd\",\n        \"banner_image\": \"ddd\",\n        \"image_one\": \"\",\n        \"image_two\": \"\",\n        \"content_one\": \"fddddff\",\n        \"content_two\": \"\",\n        \"content_three\": \"\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5f215894de74170eca386a76\",\n        \"createdAt\": \"2020-07-29T11:08:04.806Z\",\n        \"__v\": 0\n    },\n    \"message\": \"State article Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/state_article.routes.js",
    "groupTitle": "State_article",
    "name": "PutAdminStateArticleUpdate"
  },
  {
    "type": "get",
    "url": "/admin/status/:id",
    "title": "Status details",
    "version": "1.0.0",
    "group": "Status",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"_id\": \"5ed771bf32430a0889a0f1f6\",\n        \"title\": \"test\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"createdAt\": \"2020-06-03T09:47:43.640Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Status fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/status.routes.js",
    "groupTitle": "Status",
    "name": "GetAdminStatusId"
  },
  {
    "type": "get",
    "url": "/admin/status/list",
    "title": "Status list",
    "version": "1.0.0",
    "group": "Status",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5ed771bf32430a0889a0f1f6\",\n            \"title\": \"test\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-03T09:47:43.640Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ed7721102ce5008b65a2841\",\n            \"title\": \"test1\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"createdAt\": \"2020-06-03T09:49:05.067Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Status fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/status.routes.js",
    "groupTitle": "Status",
    "name": "GetAdminStatusList"
  },
  {
    "type": "post",
    "url": "/admin/status/add",
    "title": "Status Add",
    "version": "1.0.0",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"test\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5ed771bf32430a0889a0f1f6\",\n        \"createdAt\": \"2020-06-03T09:47:43.640Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Status Created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/status.routes.js",
    "groupTitle": "Status",
    "name": "PostAdminStatusAdd"
  },
  {
    "type": "post",
    "url": "/admin/status/delete",
    "title": "Status Delete",
    "version": "1.0.0",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status_id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"test2\",\n        \"status\": \"Active\",\n        \"isDeleted\": true,\n        \"_id\": \"5ed77c0cc7d64cd82be081c7\",\n        \"createdAt\": \"2020-06-03T09:49:05.067Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Status Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/status.routes.js",
    "groupTitle": "Status",
    "name": "PostAdminStatusDelete"
  },
  {
    "type": "post",
    "url": "/admin/status/update",
    "title": "Status Edit",
    "version": "1.0.0",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status_id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"title\": \"test4\",\n        \"status\": \"Active\",\n        \"isDeleted\": false,\n        \"_id\": \"5ed771bf32430a0889a0f1f6\",\n        \"createdAt\": \"2020-06-03T09:47:43.640Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Status Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/status.routes.js",
    "groupTitle": "Status",
    "name": "PostAdminStatusUpdate"
  },
  {
    "type": "GET",
    "url": "/admin/user/getprofile",
    "title": "User's Profile",
    "version": "1.0.0",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's Access token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"first_name\": \"Super\",\n        \"last_name\": \"Admin\",\n        \"phone\": \"1234567\",\n        \"address\": \"\",\n        \"email\": \"admin@admin.com\",\n        \"password\": \"$2a$08$kC4EndF7ghRHxaMgrnk8HuNF0ezhUBnu5XmV9gmfcCym6suyV/lf.\",\n        \"profile_image\": \"\",\n        \"isDeleted\": false,\n        \"isActive\": true,\n        \"_id\": \"5ea30a50c7d64cd82be64a97\",\n        \"full_name\": \"Super Admin\",\n        \"role\": \"5ea309dbc7d64cd82be647d3\",\n        \"updatedAt\": \"2020-06-02T10:05:24.600Z\"\n    },\n    \"message\": \"Profile Info fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/user.routes.js",
    "groupTitle": "User",
    "name": "GetAdminUserGetprofile"
  },
  {
    "type": "get",
    "url": "/admin/user/logout",
    "title": "User Logout",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's Access Token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [],\n    \"isLoggedIn\": false,\n    \"message\": \"Logout successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/admin/user.routes.js",
    "groupTitle": "User",
    "name": "GetAdminUserLogout"
  },
  {
    "type": "post",
    "url": "/admin/user/changepassword",
    "title": "Change User Password",
    "version": "1.0.0",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "old_password",
            "description": "<p>User's Current password</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "new_password",
            "description": "<p>New password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"first_name\": \"Super\",\n        \"last_name\": \"Admin\",\n        \"phone\": \"1234567\",\n        \"address\": \"\",\n        \"email\": \"admin@admin.com\",\n        \"password\": \"$2a$08$kC4EndF7ghRHxaMgrnk8HuNF0ezhUBnu5XmV9gmfcCym6suyV/lf.\",\n        \"profile_image\": \"\",\n        \"isDeleted\": false,\n        \"isActive\": true,\n        \"_id\": \"5ea30a50c7d64cd82be64a97\",\n        \"full_name\": \"Super Admin\",\n        \"role\": \"5ea309dbc7d64cd82be647d3\",\n        \"updatedAt\": \"2020-06-02T10:05:24.600Z\"\n    },\n    \"message\": \"Password Changed Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/user.routes.js",
    "groupTitle": "User",
    "name": "PostAdminUserChangepassword"
  },
  {
    "type": "post",
    "url": "/admin/user/forgotpassword",
    "title": "Forgot Password",
    "version": "1.0.0",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>User's account Email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"first_name\": \"Super\",\n        \"last_name\": \"Admin\",\n        \"phone\": \"1234567\",\n        \"address\": \"\",\n        \"email\": \"admin@admin.com\",\n        \"password\": \"$2a$08$kC4EndF7ghRHxaMgrnk8HuNF0ezhUBnu5XmV9gmfcCym6suyV/lf.\",\n        \"profile_image\": \"\",\n        \"isDeleted\": false,\n        \"isActive\": true,\n        \"_id\": \"5ea30a50c7d64cd82be64a97\",\n        \"full_name\": \"Super Admin\",\n        \"role\": \"5ea309dbc7d64cd82be647d3\",\n        \"deviceToken\": \"\",\n        \"deviceType\": \"\",\n        \"updatedAt\": \"2020-06-02T10:05:24.600Z\"\n    },\n    \"message\": \"A link to reset your password sent to your registered email\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/user.routes.js",
    "groupTitle": "User",
    "name": "PostAdminUserForgotpassword"
  },
  {
    "type": "post",
    "url": "/admin/user/profile/update",
    "title": "User profile update",
    "version": "1.0.0",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone Number</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"first_name\": \"Johana\",\n        \"last_name\": \"Black\",\n        \"full_name\": \"Johana Black\",\n        \"phone\": \"7894561236\",\n        \"email\": \"johan@yopmail.com\",\n        \"password\": \"$2a$08$POxN7JXDFAT7bkxkhaoQDebUT4iMPV3kcPRqxr9.Vh2lQ9vEpqj..\",\n        \"profile_pic\": \"profile_pic_1586250554891_img3.jpg\",\n        \"deviceToken\": \"123456789\",\n        \"deviceType\": \"android\",\n        \"verification_code\": null,\n        \"social_id\": \"\",\n        \"register_type\": \"normal\",\n        \"isVerified\": false,\n        \"isDeleted\": false,\n        \"email_notification\": true,\n        \"push_notification\": true,\n        \"isActive\": true,\n        \"_id\": \"5e871514d982311378cf3c6c\",\n        \"role\": \"5e81bf47c7d64cd82b5348f1\",\n        \"createdAt\": \"2020-04-03T10:51:00.684Z\",\n        \"updatedAt\": \"2020-04-07T09:09:14.970Z\"\n    },\n    \"message\": \"User details updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/user.routes.js",
    "groupTitle": "User",
    "name": "PostAdminUserProfileUpdate"
  },
  {
    "type": "post",
    "url": "/admin/user/signin",
    "title": "User SignIn",
    "version": "1.0.0",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"data\": {\n        \"first_name\": \"Super\",\n        \"last_name\": \"Admin\",\n        \"phone\": \"1234567\",\n        \"address\": \"\",\n        \"email\": \"admin@admin.com\",\n        \"password\": \"$2a$08$kC4EndF7ghRHxaMgrnk8HuNF0ezhUBnu5XmV9gmfcCym6suyV/lf.\",\n        \"profile_image\": \"\",\n        \"isDeleted\": false,\n        \"isActive\": true,\n        \"_id\": \"5ea30a50c7d64cd82be64a97\",\n        \"full_name\": \"Super Admin\",\n        \"role\": {\n            \"desc\": \"Administrator of the application.\",\n            \"_id\": \"5ea309dbc7d64cd82be647d3\",\n            \"roleDisplayName\": \"Administrator\",\n            \"role\": \"admin\",\n            \"id\": \"5ea309dbc7d64cd82be647d3\"\n        },\n        \"deviceToken\": \"\",\n        \"deviceType\": \"\",\n        \"updatedAt\": \"2020-06-02T10:05:24.600Z\"\n    },\n    \"isLoggedIn\": true,\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTMwYTUwYzdkNjRjZDgyYmU2NGE5NyIsImlhdCI6MTU5MTA5MjQ4NSwiZXhwIjoxNTkzNjg0NDg1fQ.7aTlI-mROtRN_J0XY6RbDFrBPQref3hCDct7L9FMaLs\",\n    \"message\": \"Login successful.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/user.routes.js",
    "groupTitle": "User",
    "name": "PostAdminUserSignin"
  }
] });
