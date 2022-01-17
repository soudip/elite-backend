const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const planCoveredItemController = require('webservice/frontend/plan_covered_item.controller');

/**
 * @api {get} /frontend/plan-covered-item/list Plan covered item list by category
 * @apiVersion 1.0.0
 * @apiGroup Plan
  * @apiSuccessExample {json} Success
 * {
  "data": [
    {
      "_id": "appliance",
      "items": [
        {
          "_id": "5fd8715d0e8144b9d57a41a6",
          "title": "REFRIGERATOR INCLUDING ICE MAKER & WATER DISPENSER",
          "image": "1608035088548_REFRIGERATOR_INCLUDING_ICE_MAKER_&_WATER_DISPENSER.png",
          "description": "A refrigerator is an appliance for keeping things cold. Its main goal is to store food\r\nand beverages in a cold temperature.",
          "average_cost_repair": 275,
          "average_cost_replacement": 2000,
          "coverage_highlight": [
            ""
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including\r\nintegrated freezer, ice maker, ice dispenser, water dispenser, control board,\r\ncompressor, condensers, evaporators, fan motors, timers, thermostats, wiring,\r\nracks, shelves, door seals, door alarms and consequential food spoilage",
          "covered_additional_information": "",
          "covered_system_types": [
            ""
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "touch panel | filter | water lines | freon | leaks | Free standing freezer | multi media\r\ncenters | wine chillers | panels | cabinetry",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            ""
          ],
          "freon_coverage": "",
          "coverage_limit": "$3,000 per Term",
          "standard_price": 69,
          "custom_price": 79,
          "item_removal_price": 25,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-15T08:18:37.009Z",
          "__v": 0,
          "maximum_allowed_decrease": "1000",
          "maximum_allowed_increase": "12000",
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "type": "appliance",
          "maxQuantity": 3
        },
        {
          "_id": "5fd884730e8144b9d57a41a9",
          "title": "RANGE/OVEN/COOKTOP",
          "image": "1608045016623_Range_Oven_Cooktop.png",
          "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
          "average_cost_repair": 250,
          "average_cost_replacement": 1200,
          "coverage_highlight": [
            ""
          ],
          "covered_subtitle": "",
          "covered_list": "N/A",
          "covered_additional_information": "",
          "covered_system_types": [
            ""
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "N/A",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            ""
          ],
          "freon_coverage": "",
          "coverage_limit": "$2,000 per Term",
          "standard_price": 69,
          "custom_price": 79,
          "item_removal_price": 20,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-15T09:40:03.919Z",
          "__v": 0,
          "maximum_allowed_decrease": "500",
          "maximum_allowed_increase": "10000",
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "type": "appliance",
          "maxQuantity": 3
        },
        {
          "_id": "5fd8a2970e8144b9d57a41ac",
          "title": "TRASH COMPACTOR",
          "image": "1608045316063_Trash_Compactor.png",
          "description": "The kitchen trash compactor is a home appliance that crushes and bundles\r\ngarbage for easy disposal.",
          "average_cost_repair": 125,
          "average_cost_replacement": 300,
          "coverage_highlight": [
            ""
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including\r\nmotors, switches, relays, tracks and wiring",
          "covered_additional_information": "",
          "covered_system_types": [
            ""
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "racks | panels | cabinetry | removable buckets | door seals | knob | handles |\r\npedals | automatic deodorizers",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            ""
          ],
          "freon_coverage": "",
          "coverage_limit": "$700 per Term",
          "standard_price": 39,
          "custom_price": 49,
          "item_removal_price": 10,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-15T11:48:39.686Z",
          "__v": 0,
          "maximum_allowed_decrease": "0",
          "maximum_allowed_increase": "1300",
          "maximum_coverage_decrease_fee": "0",
          "maximum_coverage_increase_fee": "5",
          "type": "appliance"
        },
        {
          "_id": "5fd8a3520e8144b9d57a41ad",
          "title": "GARBAGE DISPOSAL",
          "image": "1608045361875_Garbage_disposal.png",
          "description": "Garbage disposal is mounted to the underside of a sink and is designed to collect \r\nsolid food waste in a grinding chamber.",
          "average_cost_repair": 100,
          "average_cost_replacement": 150,
          "coverage_highlight": [
            ""
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including\r\nmotors, blades, wiring, casing and switches",
          "covered_additional_information": "",
          "covered_system_types": [
            ""
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "N/A",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            ""
          ],
          "freon_coverage": "",
          "coverage_limit": "$500 per Term",
          "standard_price": 39,
          "custom_price": 49,
          "item_removal_price": 10,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-15T11:51:46.218Z",
          "__v": 0,
          "maximum_allowed_decrease": "0",
          "maximum_allowed_increase": "1500",
          "maximum_coverage_decrease_fee": "0",
          "maximum_coverage_increase_fee": "5",
          "type": "appliance"
        },
        {
          "_id": "5fd87ddb0e8144b9d57a41a8",
          "title": "CLOTHES DRYER",
          "image": "1608044775686_Clothes_Dryer.png",
          "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
          "average_cost_repair": 225,
          "average_cost_replacement": 750,
          "coverage_highlight": [
            ""
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, thermostats, motors, pumps, timers, wiring, belts, relays and switches,\r\nhoses, burners and heating elements, pulleys, igniters, fuses, lint screens and gas\r\nvalve",
          "covered_additional_information": "",
          "covered_system_types": [
            ""
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "soap dispenser | panels | filters | cabinetry",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            ""
          ],
          "freon_coverage": "",
          "coverage_limit": "$2,000 per Term",
          "standard_price": 59,
          "custom_price": 69,
          "item_removal_price": 20,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-15T09:11:55.520Z",
          "__v": 0,
          "maximum_allowed_decrease": "500",
          "maximum_allowed_increase": "3000",
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "type": "appliance",
          "maxQuantity": 0
        },
        {
          "_id": "5fd875e10e8144b9d57a41a7",
          "title": "CLOTHES WASHER",
          "image": "1608038562106_Clothes_Washes.png",
          "description": "A washing machine (laundry machine, clothes washer, or washer) is a home\r\nappliance used to wash laundry.",
          "average_cost_repair": 225,
          "average_cost_replacement": 750,
          "coverage_highlight": [
            ""
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, thermostats, motors, pumps, timers, wiring, belts, relays and switches,\r\nhoses, burners and heating elements, pulleys, igniters, fuses, lint screens and gas\r\nvalve",
          "covered_additional_information": "",
          "covered_system_types": [
            ""
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "soap dispenser | panels | filters | cabinetry",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            ""
          ],
          "freon_coverage": "",
          "coverage_limit": "$2,000 per Term ",
          "standard_price": 59,
          "custom_price": 69,
          "item_removal_price": 20,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-15T08:37:53.831Z",
          "__v": 0,
          "maximum_allowed_decrease": "500",
          "maximum_allowed_increase": "3000",
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "type": "appliance",
          "maxQuantity": 0
        },
        {
          "_id": "5fd89ac60e8144b9d57a41ab",
          "title": "BUILT-IN MICROWAVE OVEN",
          "image": "1608045198422_Built_In_Microwave.png",
          "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
          "average_cost_repair": 125,
          "average_cost_replacement": 400,
          "coverage_highlight": [
            ""
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
          "covered_additional_information": "",
          "covered_system_types": [
            ""
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            ""
          ],
          "freon_coverage": "",
          "coverage_limit": "$1,000 per Term",
          "standard_price": 49,
          "custom_price": 59,
          "item_removal_price": 10,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-15T11:15:18.132Z",
          "__v": 0,
          "maximum_allowed_decrease": "0",
          "maximum_allowed_increase": "4000",
          "maximum_coverage_decrease_fee": "0",
          "maximum_coverage_increase_fee": "6",
          "type": "appliance"
        },
        {
          "_id": "5fd887150e8144b9d57a41aa",
          "title": "DISHWASHER",
          "image": "1608045156547_Dish_Washer.png",
          "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
          "average_cost_repair": 175,
          "average_cost_replacement": 1000,
          "coverage_highlight": [
            ""
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
          "covered_additional_information": "",
          "covered_system_types": [
            ""
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            ""
          ],
          "freon_coverage": "",
          "coverage_limit": "$2,000 per Term",
          "standard_price": 59,
          "custom_price": 69,
          "item_removal_price": 20,
          "percentage_fee": "30",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-15T09:51:17.121Z",
          "__v": 0,
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "maximum_allowed_decrease": "500",
          "maximum_allowed_increase": "3000",
          "type": "appliance",
          "maxQuantity": 1
        },
        {
          "_id": "5fdc97cced66698d0ab5d451",
          "title": "CEILING FAN",
          "image": "1608292300790_Ceiling_Fans.png",
          "description": "A ceiling fan is a mechanical fan mounted on the ceiling of a room or space,\r\nusually electrically powered, suspended from the ceiling of a room, that uses hubmounted rotating blades to circulate air.",
          "average_cost_repair": 125,
          "average_cost_replacement": 250,
          "coverage_highlight": [
            
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including\r\nmotors, switches, bearings, and controls",
          "covered_additional_information": "",
          "covered_system_types": [
            
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "blades | filters | shutters | lighting",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            
          ],
          "freon_coverage": "",
          "coverage_limit": "$1,000 per Term.",
          "standard_price": 59,
          "custom_price": 69,
          "item_removal_price": 20,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-18T11:51:40.828Z",
          "__v": 0,
          "maximum_allowed_decrease": "300",
          "maximum_allowed_increase": "1000",
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "type": "appliance",
          "maxQuantity": 0
        }
      ]
    },
    {
      "_id": "system",
      "items": [
        {
          "_id": "5fdc68baed66698d0ab5d44d",
          "title": "WATER HEATER",
          "image": "1608280250203_Water_Heater.png",
          "description": "Water heater is a system with heat transfer process that uses an energy source to\r\nheat water above its initial temperature.",
          "average_cost_repair": 245,
          "average_cost_replacement": 1500,
          "coverage_highlight": [
            
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including\r\ntankless water heaters, circulating pumps, control board, thermostats, heating\r\nelements, gas valves, pressure switches, vent pipes, vent lines, racks, straps,\r\nblankets, hot water dispensers, thermal expansion tanks, flues, thermocouple,\r\nignition module and Igniter",
          "covered_additional_information": "",
          "covered_system_types": [
            
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "solar components | noise | lime buildup | magnesium rod failure",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            
          ],
          "freon_coverage": "",
          "coverage_limit": "$3,000 per Term.",
          "standard_price": 99,
          "custom_price": 119,
          "item_removal_price": 35,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-18T08:30:50.241Z",
          "__v": 0,
          "maximum_allowed_decrease": "1000",
          "maximum_allowed_increase": "2000",
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "type": "system"
        },
        {
          "_id": "5fdb312b0e8144b9d57a41b0",
          "title": "ELECTRICAL SYSTEM",
          "image": "1608200491446_Electrical_System.png",
          "description": "An electric system consists of all of the elements needed to distribute electrical\r\npower, including overhead and underground lines, poles, transformers, and other\r\nequipment.",
          "average_cost_repair": 150,
          "average_cost_replacement": 1500,
          "coverage_highlight": [
            ""
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including wiring,\r\nmain panels, sub-panels, switches, breakers, receptacles, junction boxes, ground\r\nfault interrupters, attic and exhaust fans, outlets, and built-in bathroom exhaust\r\nfans",
          "covered_additional_information": "",
          "covered_system_types": [
            ""
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "circuit overload | intercom systems | meter boxes | face plates | DC components |\r\nfixtures | loss and/or damage arising out of power failure, power surge, flood and/\r\nor fire",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            ""
          ],
          "freon_coverage": "",
          "coverage_limit": "$3,000 per Term.",
          "standard_price": 79,
          "custom_price": 99,
          "item_removal_price": 30,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-17T10:21:31.476Z",
          "__v": 0,
          "maximum_allowed_decrease": "1000",
          "maximum_allowed_increase": "2000",
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "type": "system"
        },
        {
          "_id": "5fdb7b1e0e8144b9d57a41b1",
          "title": "PLUMBING SYSTEM",
          "image": "1608219422853_Plumbing.png",
          "description": "Plumbing is a system that conveys fluids for a wide range of applications.\r\nPlumbing uses pipes, valves, tanks, plumbing fixtures, and other apparatuses to\r\nconvey fluids.",
          "average_cost_repair": 300,
          "average_cost_replacement": 1500,
          "coverage_highlight": [
            
          ],
          "covered_subtitle": "",
          "covered_list": "Interior plumbing lines including leaks/breaks of any kind, water lines, waste lines,\r\nvent lines, valves, pressure regulators, expansion tanks, toilets and related\r\nmechanisms, toilet wax ring seals, tubs, diverters, angle stops, risers, gate valves,\r\nhose bibs, basket strainers, expansion tanks, built-in bathtub whirlpool motor/\r\npump/air switch assemblies",
          "covered_additional_information": "Where covered repairs require access to plumbing, EHW will provide access to\r\nplumbing only through unobstructed walls, ceilings or floors, and will return\r\naccess openings to a rough finish. If the plumbing is accessible only through a\r\nconcrete floor, wall or ceiling, EHW will pay up to $1,000 per Term for access,\r\ndiagnosis, repair, or replacement of such plumbing, including returning access\r\nopenings to a rough finish. Customer is responsible for payment of any costs in\r\nexcess of $1,000.",
          "covered_system_types": [
            
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "showers | bathtubs | sinks | toilet seats and leads | jets | saunas or steam rooms |\r\nstorage tanks | holding tanks | grouting | caulking | water filtration system* | septic\r\ntanks* | sump pumps* | well pumps* | ejector pumps* | Access through roof vents.",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            
          ],
          "freon_coverage": "",
          "coverage_limit": "$3,000 per Term",
          "standard_price": 79,
          "custom_price": 99,
          "item_removal_price": 35,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-17T15:37:02.974Z",
          "__v": 0,
          "maximum_allowed_decrease": "1000",
          "maximum_allowed_increase": "7000",
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "type": "system"
        },
        {
          "_id": "5fdc738eed66698d0ab5d44f",
          "title": "DOOR BELL",
          "image": "1608283022368_Door_Bell.png",
          "description": "A doorbell is a signaling device typically placed near a door to a home entrance.",
          "average_cost_repair": 75,
          "average_cost_replacement": 150,
          "coverage_highlight": [
            
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including doorbell wiring",
          "covered_additional_information": "",
          "covered_system_types": [
            
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "intercom system | systems",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            
          ],
          "freon_coverage": "",
          "coverage_limit": "$500 per Term.",
          "standard_price": 39,
          "custom_price": 49,
          "item_removal_price": 10,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-18T09:17:02.383Z",
          "__v": 0,
          "maximum_allowed_decrease": "0",
          "maximum_allowed_increase": "0",
          "maximum_coverage_decrease_fee": "0",
          "maximum_coverage_increase_fee": "0",
          "type": "system",
          "maxQuantity": 0
        },
        {
          "_id": "5fdb26750e8144b9d57a41af",
          "title": "HEATING INCLUDING DUCTWORK",
          "image": "1608197749002_Heating_including_ductwork.png",
          "description": "A system for controlling the humidity, ventilation, and temperature of the interior\r\nof an occupied space to improve the comfort of occupants, typically to maintain a\r\nwarm atmosphere in cold conditions.",
          "average_cost_repair": 250,
          "average_cost_replacement": 3000,
          "coverage_highlight": [
            ""
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including main\r\ncontrol board, thermostats, compressors, motors, condensers, pumps,\r\ntransformers, capacitors, contactors, pressure switches, coils, belts, pulleys,\r\nrelays, drain lines, thermistor, humidifiers, elements, exchangers, zone controllers,\r\nfuses, electronic circuits, rectifiers, rust and corrosion, defrost elements and\r\nfreon",
          "covered_additional_information": "",
          "covered_system_types": [
            "Forced air systems",
            "electric baseboards",
            "hot water units",
            "steam circulating units",
            "wall mounted heaters",
            "heat pumps",
            "floor furnaces",
            "mini splits",
            "geothermal",
            "radiant units",
            "solar units",
            "packaged units",
            "HVAC System (if applicable)"
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "leaks of any kind | fuel storage tanks | outside or underground piping for geothermal and/or water units | maintenance | filters | mismatched systems | improperly sized units |noise | support equipment",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            "Portable units",
            "chimneys",
            "fireplaces",
            "wood, grain or pallet heating units",
            "window units",
            "air cleaners"
          ],
          "freon_coverage": "",
          "coverage_limit": "$5,000 per Term. If the Heating system is part of an HVAC system, the Maximum Coverage under this category of system is $8,000 per Term. ",
          "standard_price": 149,
          "custom_price": 199,
          "item_removal_price": 40,
          "percentage_fee": "10",
          "note": "AIR CONDITIONING, HEATING and HVAC SYSTEM* NOTES:\r\nIf the Residence: (a) does not have an HVAC system serve as its primary heating\r\nand cooling system, we provide the standard coverage you separately selected,\r\npaid the additional charge for, and which appears on the Account Summary for (i)\r\nthe Residence's primary gas, oil or electric heating unit and ductwork, or (ii) the\r\nResidence's primary air conditioning unit and ductwork, or (iii) both (i) and (ii)\r\nor\r\n(b) does have an HVAC system, we provide standard coverage for the HVAC \r\nsystem, provided, however, that we provide no coverage for any other air \r\nconditioning or heating equipment or ductwork that heats or cools any part of a\r\nfloor within the Residence, unless you separately selected such additional\r\ncoverage, paid the additional charge for such coverage, and such coverage\r\nappears on the Account Summary.\r\nCoverage is available on HVAC system or Heating and Air Conditioning units\r\nhaving a capacity of up to five (5) tons. EHW will pay up to $1,500 per Term for\r\naccess, diagnosis and repair or replacement of any geothermal and/or water\r\nsource heat pumps, glycol, hot water, or steam circulating system. Where covered\r\nrepairs require access to Air Conditioning and Heating ductwork, EHW will provide\r\naccess to ductwork only through unobstructed walls, ceilings or floors, and will\r\nreturn access openings to a rough finish.\r\nIf the Air Conditioning and Heating ductwork is accessible only through a concrete\r\nfloor, wall or ceiling, EHW will pay a total of up to $1,000 per Term to access,\r\ndiagnose, repair or replace such ductwork, including returning access openings to\r\na rough finish. During the Term, EHW will pay for access, diagnosis, and\r\nreplacement related to necessary or required Heating and Air Conditioning system\r\nefficiency and other upgrades except: (1) costs associated with plenums and\r\nrefrigerant line sets, and (2) any other Heating and Air Conditioning-specific\r\nlimitations and exclusions in your Agreement.\r\n*When the word “primary” is used in respect to the air conditioning and heating\r\nsystem for a heated and/or cooled floor of the Residence, “primary” means: (a) the\r\nHVAC system, if it heats and cools any part of that floor, or (b) the main source of\r\ncooling and/or heating for a floor, if there is no HVAC system that heats or cools\r\nany part of that floor.",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-17T09:35:49.018Z",
          "__v": 0,
          "maximum_allowed_decrease": "100",
          "maximum_allowed_increase": "5000",
          "maximum_coverage_decrease_fee": "1",
          "maximum_coverage_increase_fee": "4",
          "type": "system"
        },
        {
          "_id": "5fdc6d38ed66698d0ab5d44e",
          "title": "GARAGE DOOR OPENER",
          "image": "1608281400611_Garage_door_opener.png",
          "description": "A garage door opener is a motorized device that opens and closes garage doors\r\ncontrolled by switches on the garage wall.",
          "average_cost_repair": 225,
          "average_cost_replacement": 1500,
          "coverage_highlight": [
            
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, relays, switches, chains, belts, gears, pulley, capacitors, drive\r\ntrains, track assembly, hinges, springs, push arm, door hardware, axle bolts, and\r\nkeypad",
          "covered_additional_information": "",
          "covered_system_types": [
            
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "garage door",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            
          ],
          "freon_coverage": "",
          "coverage_limit": "$2,000 per Term.",
          "standard_price": 99,
          "custom_price": 119,
          "item_removal_price": 20,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-18T08:50:00.699Z",
          "__v": 0,
          "maximum_allowed_decrease": "500",
          "maximum_allowed_increase": "2000",
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "type": "system"
        },
        {
          "_id": "5fdc9703ed66698d0ab5d450",
          "title": "SMOKE DETECTOR",
          "image": "1608292099194_Smoke_Detector.png",
          "description": "A smoke detector is a device that senses smoke, typically as an indicator of fire.",
          "average_cost_repair": 50,
          "average_cost_replacement": 125,
          "coverage_highlight": [
            
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including\r\nhardwired, and battery-operated units",
          "covered_additional_information": "",
          "covered_system_types": [
            
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "N/A",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            
          ],
          "freon_coverage": "",
          "coverage_limit": "$500 per Term.",
          "standard_price": 39,
          "custom_price": 49,
          "item_removal_price": 10,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-18T11:48:19.201Z",
          "__v": 0,
          "maximum_allowed_decrease": "0",
          "maximum_allowed_increase": "0",
          "maximum_coverage_decrease_fee": "0",
          "maximum_coverage_increase_fee": "0",
          "type": "system",
          "maxQuantity": 0
        },
        {
          "_id": "5fd8bf3e0e8144b9d57a41ae",
          "title": "AIR CONDITIONING INCLUDING DUCTWORK",
          "image": "1608040254667_Air_conditioning_including_ductwork.png",
          "description": "A system for controlling the humidity, ventilation, and temperature of the interior\r\nof an occupied space to improve the comfort of occupants, typically to maintain a\r\ncool atmosphere in warm conditions.",
          "average_cost_repair": 275,
          "average_cost_replacement": 3500,
          "coverage_highlight": [
            ""
          ],
          "covered_subtitle": "",
          "covered_list": "All components and parts needed to perform its full functionality, including main\r\ncontrol board, thermostats, compressors, motors, condensers, casings, pumps,\r\ntransformers, capacitors, contactors, pressure switches, coils, belts, pulleys, drain\r\nlines, thermistor, humidifiers, elements, exchangers, zone controllers, fuses,\r\nelectronic circuits, rectifiers, rust and corrosion, defrost elements and freon*",
          "covered_additional_information": "",
          "covered_system_types": [
            "Electric central air conditioning unit",
            "heat pump",
            "duct systems",
            "wall air conditioners",
            "mini splits",
            "geothermal",
            "radiant units",
            "solar units",
            "packaged units",
            "HVAC System(if applicable)"
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "leaks of any kind | outside or underground piping for geothermal and/or water\r\nunits | maintenance | filters | mismatched systems | improperly sized\r\nunits | noise | support equipment",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            "Portable units",
            "gas units",
            "water towers",
            "Chillers",
            "lithium units",
            "window units"
          ],
          "freon_coverage": "EHW will pay up to $25 per pound for refrigerant limited to 10 pounds per Breakdown, and EHW's liability hereunder is limited to paying in the aggregate up to $500 per Term for refrigerant for all Breakdowns which could be covered under this Section, unless additional coverage is purchased and noted herein.",
          "coverage_limit": "$5000 per Term. If the Air Conditioning system is part of an HVAC system, the Maximum Coverage under this category of system is $8,000 per Term.",
          "standard_price": 149,
          "custom_price": 199,
          "item_removal_price": 40,
          "percentage_fee": "10",
          "note": "AIR CONDITIONING, HEATING and HVAC SYSTEM* NOTES:\r\nIf the Residence: (a) does not have an HVAC system serve as its primary heating\r\nand cooling system, we provide the standard coverage you separately selected,\r\npaid the additional charge for, and which appears on the Account Summary for (i)\r\nthe Residence's primary gas, oil or electric heating unit and ductwork, or (ii) the\r\nResidence's primary air conditioning unit and ductwork, or (iii) both (i) and (ii); or\r\n(b) does have an HVAC system, we provide standard coverage for the HVAC\r\nsystem, provided, however, that we provide no coverage for any other air\r\nconditioning or heating equipment or ductwork that heats or cools any part of a\r\nfloor within the Residence, unless you separately selected such additional\r\ncoverage, paid the additional charge for such coverage, and such coverage\r\nappears on the Account Summary.\r\nCoverage is available on HVAC system or Heating and Air Conditioning units\r\nhaving a capacity of up to five (5) tons. EHW will pay up to $1,500 per Term for\r\naccess, diagnosis and repair or replacement of any geothermal and/or water\r\nsource heat pumps, glycol, hot water, or steam circulating system. Where covered\r\nrepairs require access to Air Conditioning and Heating ductwork, EHW will provide\r\naccess to ductwork only through unobstructed walls, ceilings or floors, and will\r\nreturn access openings to a rough finish.\r\nIf the Air Conditioning and Heating ductwork is accessible only through a concrete\r\nfloor, wall or ceiling, EHW will pay a total of up to $1,000 per Term to access,\r\ndiagnose, repair or replace such ductwork, including returning access openings to\r\na rough finish. During the Term, EHW will pay for access, diagnosis, and\r\nreplacement related to necessary or required Heating and Air Conditioning system\r\nefficiency and other upgrades except: (1) costs associated with plenums and\r\nrefrigerant line sets, and (2) any other Heating and Air Conditioning-specific\r\nlimitations and exclusions in your Agreement.\r\n*When the word “primary” is used in respect to the air conditioning and heating\r\nsystem for a heated and/or cooled floor of the Residence, “primary” means: (a) the\r\nHVAC system, if it heats and cools any part of that floor, or (b) the main source of\r\ncooling and/or heating for a floor, if there is no HVAC system that heats or cools\r\nany part of that floor.",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-15T13:50:54.749Z",
          "__v": 0,
          "maximum_allowed_decrease": "1000",
          "maximum_allowed_increase": "5000",
          "maximum_coverage_decrease_fee": "1",
          "maximum_coverage_increase_fee": "4",
          "type": "system"
        },
        {
          "_id": "5fdb834d0e8144b9d57a41b2",
          "title": "PLUMBING STOPPAGE",
          "image": "1608221517459_Plumbing_stopages.png",
          "description": "A blockage is a blockage in the plumbing system, whether it is a clog in a toilet, a\r\nclog in a sink, a clog in a bathtub, a clog in a kitchen sink or a block in any other\r\ndrain.",
          "average_cost_repair": 150,
          "average_cost_replacement": 1000,
          "coverage_highlight": [
            
          ],
          "covered_subtitle": "",
          "covered_list": "Plumbing stoppages including stoppages of any kind, water lines, waste lines, vent\r\nlines, clearing of toilet/shower/bathtub and sink stoppages, clearing of mainline\r\ndrain and sewer stoppages through an accessible cleanout up to 100 feet from\r\naccess point, Clearing of lateral drain line stoppages up to 100 feet from access\r\npoint including accessible cleanout, p-trap, drain or overflow access points.",
          "covered_additional_information": "Where covered repairs require access to plumbing, EHW will provide access to\r\nplumbing only through unobstructed walls, ceilings or floors, and will return\r\naccess openings to a rough finish. If the plumbing is accessible only through a\r\nconcrete floor, wall or ceiling, EHW will pay up to $1,000 per Term for access,\r\ndiagnosis, repair, or replacement of such plumbing, including returning access\r\nopenings to a rough finish. Customer is responsible for payment of any costs in\r\nexcess of $1,000.",
          "covered_system_types": [
            
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "Interior and/or exterior Stoppages caused by collapsed, damaged or broken drain,\r\nvent or sewer lines outside the Residence's main foundation | Lines broken,\r\ninfiltrated or stopped by roots or foreign objects, even if within the Residence's\r\nmain foundation | Costs to locate or access cleanouts not found or inaccessible, or\r\nto install cleanouts | Access through roof vents.",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            
          ],
          "freon_coverage": "",
          "coverage_limit": "$2,000 per Term.",
          "standard_price": 59,
          "custom_price": 79,
          "item_removal_price": 25,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-17T16:11:57.532Z",
          "__v": 0,
          "maximum_allowed_decrease": "500",
          "maximum_allowed_increase": "3000",
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "type": "system"
        }
      ]
    },
    {
      "_id": "exterior",
      "items": [
        {
          "_id": "6179579d0337fba07e27fa45",
          "title": "WATER LINE",
          "image": "1608297428821_Leak_roof_Service.png",
          "description": "A roof is the top covering of a property, including all materials and constructions\r\nnecessary to support it on the walls of the property or on uprights, providing\r\nprotection against rain, snow, sunlight, extremes of temperature, and wind.",
          "average_cost_repair": 225,
          "average_cost_replacement": null,
          "coverage_highlight": [
            
          ],
          "covered_subtitle": "",
          "covered_list": "Limited Roof Patching Repairs required to patch a roof when necessary to stop a\r\nresulting interior leak in the occupied living area of the Residence directly beneath\r\nthe roof, or to repair an interior ceiling that experienced secondary damage solely\r\ndue to a roof leak, provided that in each case such leak resulted directly from the\r\nroof and is wholly unrelated to any casualty event, including roof leak patching\r\nactivities",
          "covered_additional_information": "Coverage under this Section is limited to Limited Roof Leak Repair Services only\r\nand does not under any circumstances include coverage for a partial or complete\r\nreplacement of a roof.",
          "covered_system_types": [
            
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "cracked and/or missing tiles | shakes | shingles | sheet metal panels or solar roof\r\npanels | foam roofs | tar and gravel | structural components |any other material not\r\nspecifically mentioned as covered | any defects related to labor or materials used\r\nin structural components | leaks | gutters | downspouts | flashing, sheathing |\r\nframing | truss | patio covers | skylights | decks | solar equipment | vents | heating or\r\ncooling equipment | antennae | satellite components | balconies | or chimneys | built-up roofs | garage roofs | extraordinary painting | any type of damage and/or\r\nsecondary damage not included above in What Is Covered | damage caused by\r\npersons walking or standing on roof | damage due to lack of caulking or other\r\nnormal or preventative maintenance.",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            
          ],
          "freon_coverage": "",
          "coverage_limit": "$1,000 per Term.",
          "standard_price": 99,
          "custom_price": 119,
          "item_removal_price": 20,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-18T13:17:08.920Z",
          "__v": 0,
          "maximum_allowed_decrease": "500",
          "maximum_allowed_increase": "2000",
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "type": "exterior"
        },
        {
          "_id": "617957c40337fba07e27fd93",
          "title": "SEWER LINE",
          "image": "1608297428821_Leak_roof_Service.png",
          "description": "A roof is the top covering of a property, including all materials and constructions\r\nnecessary to support it on the walls of the property or on uprights, providing\r\nprotection against rain, snow, sunlight, extremes of temperature, and wind.",
          "average_cost_repair": 225,
          "average_cost_replacement": null,
          "coverage_highlight": [
            
          ],
          "covered_subtitle": "",
          "covered_list": "Limited Roof Patching Repairs required to patch a roof when necessary to stop a\r\nresulting interior leak in the occupied living area of the Residence directly beneath\r\nthe roof, or to repair an interior ceiling that experienced secondary damage solely\r\ndue to a roof leak, provided that in each case such leak resulted directly from the\r\nroof and is wholly unrelated to any casualty event, including roof leak patching\r\nactivities",
          "covered_additional_information": "Coverage under this Section is limited to Limited Roof Leak Repair Services only\r\nand does not under any circumstances include coverage for a partial or complete\r\nreplacement of a roof.",
          "covered_system_types": [
            
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "cracked and/or missing tiles | shakes | shingles | sheet metal panels or solar roof\r\npanels | foam roofs | tar and gravel | structural components |any other material not\r\nspecifically mentioned as covered | any defects related to labor or materials used\r\nin structural components | leaks | gutters | downspouts | flashing, sheathing |\r\nframing | truss | patio covers | skylights | decks | solar equipment | vents | heating or\r\ncooling equipment | antennae | satellite components | balconies | or chimneys | built-up roofs | garage roofs | extraordinary painting | any type of damage and/or\r\nsecondary damage not included above in What Is Covered | damage caused by\r\npersons walking or standing on roof | damage due to lack of caulking or other\r\nnormal or preventative maintenance.",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            
          ],
          "freon_coverage": "",
          "coverage_limit": "$1,000 per Term.",
          "standard_price": 99,
          "custom_price": 119,
          "item_removal_price": 20,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-18T13:17:08.920Z",
          "__v": 0,
          "maximum_allowed_decrease": "500",
          "maximum_allowed_increase": "2000",
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "type": "exterior"
        },
        {
          "_id": "5fdcabd4ed66698d0ab5d463",
          "title": "LIMITED ROOF LEAK REPAIR",
          "image": "1608297428821_Leak_roof_Service.png",
          "description": "A roof is the top covering of a property, including all materials and constructions\r\nnecessary to support it on the walls of the property or on uprights, providing\r\nprotection against rain, snow, sunlight, extremes of temperature, and wind.",
          "average_cost_repair": 225,
          "average_cost_replacement": null,
          "coverage_highlight": [
            
          ],
          "covered_subtitle": "",
          "covered_list": "Limited Roof Patching Repairs required to patch a roof when necessary to stop a\r\nresulting interior leak in the occupied living area of the Residence directly beneath\r\nthe roof, or to repair an interior ceiling that experienced secondary damage solely\r\ndue to a roof leak, provided that in each case such leak resulted directly from the\r\nroof and is wholly unrelated to any casualty event, including roof leak patching\r\nactivities",
          "covered_additional_information": "Coverage under this Section is limited to Limited Roof Leak Repair Services only\r\nand does not under any circumstances include coverage for a partial or complete\r\nreplacement of a roof.",
          "covered_system_types": [
            
          ],
          "not_covered_subtitle": "",
          "not_covered_list": "cracked and/or missing tiles | shakes | shingles | sheet metal panels or solar roof\r\npanels | foam roofs | tar and gravel | structural components |any other material not\r\nspecifically mentioned as covered | any defects related to labor or materials used\r\nin structural components | leaks | gutters | downspouts | flashing, sheathing |\r\nframing | truss | patio covers | skylights | decks | solar equipment | vents | heating or\r\ncooling equipment | antennae | satellite components | balconies | or chimneys | built-up roofs | garage roofs | extraordinary painting | any type of damage and/or\r\nsecondary damage not included above in What Is Covered | damage caused by\r\npersons walking or standing on roof | damage due to lack of caulking or other\r\nnormal or preventative maintenance.",
          "not_covered_additional_information": "",
          "not_covered_system_types": [
            
          ],
          "freon_coverage": "",
          "coverage_limit": "$1,000 per Term.",
          "standard_price": 99,
          "custom_price": 119,
          "item_removal_price": 20,
          "percentage_fee": "10",
          "note": "",
          "status": "Active",
          "isDeleted": false,
          "createdAt": "2020-12-18T13:17:08.920Z",
          "__v": 0,
          "maximum_allowed_decrease": "500",
          "maximum_allowed_increase": "2000",
          "maximum_coverage_decrease_fee": "2",
          "maximum_coverage_increase_fee": "4",
          "type": "exterior"
        }
      ]
    }
  ],
  "message": "Plan covered item fetched Successfully"
}
*/

namedRouter.get("frontend.planCoveredItem.list", '/plan-covered-item/list',request_param.any(),planCoveredItemController.list);


module.exports = router;
