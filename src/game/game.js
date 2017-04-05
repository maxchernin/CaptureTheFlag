/**
 * Created by Max on 3/29/2017.
 */
import React, { Component } from 'react';
import Flag from './flag/flag';
import Answers from './answers/answers';
import Score from './score/score';
import _ from 'lodash';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flags: [
				{
					"name": "Afghanistan",
					"alphaTwo": "AF",
					"id": "004",
					"city": "Kabul"
				},
				{
					"name": "Albania",
					"alphaTwo": "AL",
					"id": "008",
					"city": "Tirana"
				},
				{
					"name": "Algeria",
					"alphaTwo": "DZ",
					"id": "012",
					"city": "Alger"
				},
				{
					"name": "American Samoa",
					"alphaTwo": "AS",
					"id": "016",
					"city": "Fagatogo"
				},
				{
					"name": "Andorra",
					"alphaTwo": "AD",
					"id": "020",
					"city": "Andorra la Vella"
				},
				{
					"name": "Angola",
					"alphaTwo": "AO",
					"id": "024",
					"city": "Luanda"
				},
				{
					"name": "Anguilla",
					"alphaTwo": "AI",
					"id": "660",
					"city": "The Valley"
				},
				{
					"name": "Antarctica",
					"alphaTwo": "AQ",
					"id": "010",
					"city": null
				},
				{
					"name": "Antigua and Barbuda",
					"alphaTwo": "AG",
					"id": "028",
					"city": "Saint John's"
				},
				{
					"name": "Argentina",
					"alphaTwo": "AR",
					"id": "032",
					"city": "Buenos Aires"
				},
				{
					"name": "Armenia",
					"alphaTwo": "AM",
					"id": "051",
					"city": "Yerevan"
				},
				{
					"name": "Aruba",
					"alphaTwo": "AW",
					"id": "533",
					"city": "Oranjestad"
				},
				{
					"name": "Australia",
					"alphaTwo": "AU",
					"id": "036",
					"city": "Canberra"
				},
				{
					"name": "Austria",
					"alphaTwo": "AT",
					"id": "040",
					"city": "Wien"
				},
				{
					"name": "Azerbaijan",
					"alphaTwo": "AZ",
					"id": "031",
					"city": "Baku"
				},
				{
					"name": "Bahamas",
					"alphaTwo": "BS",
					"id": "044",
					"city": "Nassau"
				},
				{
					"name": "Bahrain",
					"alphaTwo": "BH",
					"id": "048",
					"city": "al-Manama"
				},
				{
					"name": "Bangladesh",
					"alphaTwo": "BD",
					"id": "050",
					"city": "Dhaka"
				},
				{
					"name": "Barbados",
					"alphaTwo": "BB",
					"id": "052",
					"city": "Bridgetown"
				},
				{
					"name": "Belarus",
					"alphaTwo": "BY",
					"id": "112",
					"city": "Minsk"
				},
				{
					"name": "Belgium",
					"alphaTwo": "BE",
					"id": "056",
					"city": "Bruxelles [Brussel]"
				},
				{
					"name": "Belize",
					"alphaTwo": "BZ",
					"id": "084",
					"city": "Belmopan"
				},
				{
					"name": "Benin",
					"alphaTwo": "BJ",
					"id": "204",
					"city": "Porto-Novo"
				},
				{
					"name": "Bermuda",
					"alphaTwo": "BM",
					"id": "060",
					"city": "Hamilton"
				},
				{
					"name": "Bhutan",
					"alphaTwo": "BT",
					"id": "064",
					"city": "Thimphu"
				},
				{
					"name": "Bosnia and Herzegovina",
					"alphaTwo": "BA",
					"id": "070",
					"city": "Sarajevo"
				},
				{
					"name": "Botswana",
					"alphaTwo": "BW",
					"id": "072",
					"city": "Gaborone"
				},
				{
					"name": "Bouvet Island",
					"alphaTwo": "BV",
					"id": "074",
					"city": null
				},
				{
					"name": "Brazil",
					"alphaTwo": "BR",
					"id": "076",
					"city": "Bras"
				},
				{
					"name": "British Indian Ocean Territory",
					"alphaTwo": "IO",
					"id": "086",
					"city": null
				},
				{
					"name": "Bulgaria",
					"alphaTwo": "BG",
					"id": "100",
					"city": "Sofia"
				},
				{
					"name": "Burkina Faso",
					"alphaTwo": "BF",
					"id": "854",
					"city": "Ouagadougou"
				},
				{
					"name": "Burundi",
					"alphaTwo": "BI",
					"id": "108",
					"city": "Bujumbura"
				},
				{
					"name": "Cambodia",
					"alphaTwo": "KH",
					"id": "116",
					"city": "Phnom Penh"
				},
				{
					"name": "Cameroon",
					"alphaTwo": "CM",
					"id": "120",
					"city": "Yaound"
				},
				{
					"name": "Canada",
					"alphaTwo": "CA",
					"id": "124",
					"city": "Ottawa"
				},
				{
					"name": "Cayman Islands",
					"alphaTwo": "KY",
					"id": "136",
					"city": "George Town"
				},
				{
					"name": "Central African Republic",
					"alphaTwo": "CF",
					"id": "140",
					"city": "Bangui"
				},
				{
					"name": "Chad",
					"alphaTwo": "TD",
					"id": "148",
					"city": "N'Djam"
				},
				{
					"name": "Chile",
					"alphaTwo": "CL",
					"id": "152",
					"city": "Santiago de Chile"
				},
				{
					"name": "China",
					"alphaTwo": "CN",
					"id": "156",
					"city": "Peking"
				},
				{
					"name": "Christmas Island",
					"alphaTwo": "CX",
					"id": "162",
					"city": "Flying Fish Cove"
				},
				{
					"name": "Cocos (Keeling) Islands",
					"alphaTwo": "CC",
					"id": "166",
					"city": "West Island"
				},
				{
					"name": "Colombia",
					"alphaTwo": "CO",
					"id": "170",
					"city": "Santaf"
				},
				{
					"name": "Comoros",
					"alphaTwo": "KM",
					"id": "174",
					"city": "Moroni"
				},
				{
					"name": "Congo",
					"alphaTwo": "CG",
					"id": "178",
					"city": "Brazzaville"
				},
				{
					"name": "Cook Islands",
					"alphaTwo": "CK",
					"id": "184",
					"city": "Avarua"
				},
				{
					"name": "Costa Rica",
					"alphaTwo": "CR",
					"id": "188",
					"city": "San Jos"
				},
				{
					"name": "Croatia",
					"alphaTwo": "HR",
					"id": "191",
					"city": "Zagreb"
				},
				{
					"name": "Cuba",
					"alphaTwo": "CU",
					"id": "192",
					"city": "Havana"
				},
				{
					"name": "Cyprus",
					"alphaTwo": "CY",
					"id": "196",
					"city": "Nicosia"
				},
				{
					"name": "Czech Republic",
					"alphaTwo": "CZ",
					"id": "203",
					"city": "Praha"
				},
				{
					"name": "Denmark",
					"alphaTwo": "DK",
					"id": "208",
					"city": "Copenhagen"
				},
				{
					"name": "Djibouti",
					"alphaTwo": "DJ",
					"id": "262",
					"city": "Djibouti"
				},
				{
					"name": "Dominica",
					"alphaTwo": "DM",
					"id": "212",
					"city": "Roseau"
				},
				{
					"name": "Dominican Republic",
					"alphaTwo": "DO",
					"id": "214",
					"city": "Santo Domingo de Guzm"
				},
				{
					"name": "Ecuador",
					"alphaTwo": "EC",
					"id": "218",
					"city": "Quito"
				},
				{
					"name": "Egypt",
					"alphaTwo": "EG",
					"id": "818",
					"city": "Cairo"
				},
				{
					"name": "El Salvador",
					"alphaTwo": "SV",
					"id": "222",
					"city": "San Salvador"
				},
				{
					"name": "Equatorial Guinea",
					"alphaTwo": "GQ",
					"id": "226",
					"city": "Malabo"
				},
				{
					"name": "Eritrea",
					"alphaTwo": "ER",
					"id": "232",
					"city": "Asmara"
				},
				{
					"name": "Estonia",
					"alphaTwo": "EE",
					"id": "233",
					"city": "Tallinn"
				},
				{
					"name": "Ethiopia",
					"alphaTwo": "ET",
					"id": "231",
					"city": "Addis Abeba"
				},
				{
					"name": "Faroe Islands",
					"alphaTwo": "FO",
					"id": "234",
					"city": "Tórshavn"
				},
				{
					"name": "Finland",
					"alphaTwo": "FI",
					"id": "246",
					"city": "Helsinki [Helsingfors]"
				},
				{
					"name": "France",
					"alphaTwo": "FR",
					"id": "250",
					"city": "Paris"
				},
				{
					"name": "French Guiana",
					"alphaTwo": "GF",
					"id": "254",
					"city": "Cayenne"
				},
				{
					"name": "French Polynesia",
					"alphaTwo": "PF",
					"id": "258",
					"city": "Papeete"
				},
				{
					"name": "Gabon",
					"alphaTwo": "GA",
					"id": "266",
					"city": "Libreville"
				},
				{
					"name": "Gambia",
					"alphaTwo": "GM",
					"id": "270",
					"city": "Banjul"
				},
				{
					"name": "Georgia",
					"alphaTwo": "GE",
					"id": "268",
					"city": "Tbilisi"
				},
				{
					"name": "Germany",
					"alphaTwo": "DE",
					"id": "276",
					"city": "Berlin"
				},
				{
					"name": "Ghana",
					"alphaTwo": "GH",
					"id": "288",
					"city": "Accra"
				},
				{
					"name": "Gibraltar",
					"alphaTwo": "GI",
					"id": "292",
					"city": "Gibraltar"
				},
				{
					"name": "Greece",
					"alphaTwo": "GR",
					"id": "300",
					"city": "Athenai"
				},
				{
					"name": "Greenland",
					"alphaTwo": "GL",
					"id": "304",
					"city": "Nuuk"
				},
				{
					"name": "Grenada",
					"alphaTwo": "GD",
					"id": "308",
					"city": "Saint George's"
				},
				{
					"name": "Guadeloupe",
					"alphaTwo": "GP",
					"id": "312",
					"city": "Basse-Terre"
				},
				{
					"name": "Guam",
					"alphaTwo": "GU",
					"id": "316",
					"city": "Aga"
				},
				{
					"name": "Guatemala",
					"alphaTwo": "GT",
					"id": "320",
					"city": "Ciudad de Guatemala"
				},
				{
					"name": "Guinea",
					"alphaTwo": "GN",
					"id": "324",
					"city": "Conakry"
				},
				{
					"name": "Guinea-Bissau",
					"alphaTwo": "GW",
					"id": "624",
					"city": "Bissau"
				},
				{
					"name": "Guyana",
					"alphaTwo": "GY",
					"id": "328",
					"city": "Georgetown"
				},
				{
					"name": "Haiti",
					"alphaTwo": "HT",
					"id": "332",
					"city": "Port-au-Prince"
				},
				{
					"name": "Heard Island and McDonald Islands",
					"alphaTwo": "HM",
					"id": "334",
					"city": null
				},
				{
					"name": "Honduras",
					"alphaTwo": "HN",
					"id": "340",
					"city": "Tegucigalpa"
				},
				{
					"name": "Hong Kong",
					"alphaTwo": "HK",
					"id": "344",
					"city": "Victoria"
				},
				{
					"name": "Hungary",
					"alphaTwo": "HU",
					"id": "348",
					"city": "Budapest"
				},
				{
					"name": "Iceland",
					"alphaTwo": "IS",
					"id": "352",
					"city": "Reykjav"
				},
				{
					"name": "India",
					"alphaTwo": "IN",
					"id": "356",
					"city": "New Delhi"
				},
				{
					"name": "Indonesia",
					"alphaTwo": "ID",
					"id": "360",
					"city": "Jakarta"
				},
				{
					"name": "Iraq",
					"alphaTwo": "IQ",
					"id": "368",
					"city": "Baghdad"
				},
				{
					"name": "Ireland",
					"alphaTwo": "IE",
					"id": "372",
					"city": "Dublin"
				},
				{
					"name": "Israel",
					"alphaTwo": "IL",
					"id": "376",
					"city": "Jerusalem"
				},
				{
					"name": "Italy",
					"alphaTwo": "IT",
					"id": "380",
					"city": "Roma"
				},
				{
					"name": "Jamaica",
					"alphaTwo": "JM",
					"id": "388",
					"city": "Kingston"
				},
				{
					"name": "Japan",
					"alphaTwo": "JP",
					"id": "392",
					"city": "Tokyo"
				},
				{
					"name": "Jordan",
					"alphaTwo": "JO",
					"id": "400",
					"city": "Amman"
				},
				{
					"name": "Kenya",
					"alphaTwo": "KE",
					"id": "404",
					"city": "Nairobi"
				},
				{
					"name": "Kiribati",
					"alphaTwo": "KI",
					"id": "296",
					"city": "Bairiki"
				},
				{
					"name": "Kuwait",
					"alphaTwo": "KW",
					"id": "414",
					"city": "Kuwait"
				},
				{
					"name": "Kyrgyzstan",
					"alphaTwo": "KG",
					"id": "417",
					"city": "Bishkek"
				},
				{
					"name": "Latvia",
					"alphaTwo": "LV",
					"id": "428",
					"city": "Riga"
				},
				{
					"name": "Lebanon",
					"alphaTwo": "LB",
					"id": "422",
					"city": "Beirut"
				},
				{
					"name": "Lesotho",
					"alphaTwo": "LS",
					"id": "426",
					"city": "Maseru"
				},
				{
					"name": "Liberia",
					"alphaTwo": "LR",
					"id": "430",
					"city": "Monrovia"
				},
				{
					"name": "Liechtenstein",
					"alphaTwo": "LI",
					"id": "438",
					"city": "Vaduz"
				},
				{
					"name": "Lithuania",
					"alphaTwo": "LT",
					"id": "440",
					"city": "Vilnius"
				},
				{
					"name": "Luxembourg",
					"alphaTwo": "LU",
					"id": "442",
					"city": "Luxembourg [Luxemburg/L"
				},
				{
					"name": "Macao",
					"alphaTwo": "MO",
					"id": "446",
					"city": "Macao"
				},
				{
					"name": "Madagascar",
					"alphaTwo": "MG",
					"id": "450",
					"city": "Antananarivo"
				},
				{
					"name": "Malawi",
					"alphaTwo": "MW",
					"id": "454",
					"city": "Lilongwe"
				},
				{
					"name": "Malaysia",
					"alphaTwo": "MY",
					"id": "458",
					"city": "Kuala Lumpur"
				},
				{
					"name": "Maldives",
					"alphaTwo": "MV",
					"id": "462",
					"city": "Male"
				},
				{
					"name": "Mali",
					"alphaTwo": "ML",
					"id": "466",
					"city": "Bamako"
				},
				{
					"name": "Malta",
					"alphaTwo": "MT",
					"id": "470",
					"city": "Valletta"
				},
				{
					"name": "Marshall Islands",
					"alphaTwo": "MH",
					"id": "584",
					"city": "Dalap-Uliga-Darrit"
				},
				{
					"name": "Martinique",
					"alphaTwo": "MQ",
					"id": "474",
					"city": "Fort-de-France"
				},
				{
					"name": "Mauritania",
					"alphaTwo": "MR",
					"id": "478",
					"city": "Nouakchott"
				},
				{
					"name": "Mauritius",
					"alphaTwo": "MU",
					"id": "480",
					"city": "Port-Louis"
				},
				{
					"name": "Mayotte",
					"alphaTwo": "YT",
					"id": "175",
					"city": "Mamoutzou"
				},
				{
					"name": "Mexico",
					"alphaTwo": "MX",
					"id": "484",
					"city": "Ciudad de M"
				},
				{
					"name": "Monaco",
					"alphaTwo": "MC",
					"id": "492",
					"city": "Monaco-Ville"
				},
				{
					"name": "Mongolia",
					"alphaTwo": "MN",
					"id": "496",
					"city": "Ulan Bator"
				},
				{
					"name": "Montserrat",
					"alphaTwo": "MS",
					"id": "500",
					"city": "Plymouth"
				},
				{
					"name": "Morocco",
					"alphaTwo": "MA",
					"id": "504",
					"city": "Rabat"
				},
				{
					"name": "Mozambique",
					"alphaTwo": "MZ",
					"id": "508",
					"city": "Maputo"
				},
				{
					"name": "Myanmar",
					"alphaTwo": "MM",
					"id": "104",
					"city": "Rangoon (Yangon)"
				},
				{
					"name": "Namibia",
					"alphaTwo": "NA",
					"id": "516",
					"city": "Windhoek"
				},
				{
					"name": "Nauru",
					"alphaTwo": "NR",
					"id": "520",
					"city": "Yaren"
				},
				{
					"name": "Nepal",
					"alphaTwo": "NP",
					"id": "524",
					"city": "Kathmandu"
				},
				{
					"name": "Netherlands",
					"alphaTwo": "NL",
					"id": "528",
					"city": "Amsterdam"
				},
				{
					"name": "New Caledonia",
					"alphaTwo": "NC",
					"id": "540",
					"city": "Noum"
				},
				{
					"name": "New Zealand",
					"alphaTwo": "NZ",
					"id": "554",
					"city": "Wellington"
				},
				{
					"name": "Nicaragua",
					"alphaTwo": "NI",
					"id": "558",
					"city": "Managua"
				},
				{
					"name": "Niger",
					"alphaTwo": "NE",
					"id": "562",
					"city": "Niamey"
				},
				{
					"name": "Nigeria",
					"alphaTwo": "NG",
					"id": "566",
					"city": "Abuja"
				},
				{
					"name": "Niue",
					"alphaTwo": "NU",
					"id": "570",
					"city": "Alofi"
				},
				{
					"name": "Norfolk Island",
					"alphaTwo": "NF",
					"id": "574",
					"city": "Kingston"
				},
				{
					"name": "Northern Mariana Islands",
					"alphaTwo": "MP",
					"id": "580",
					"city": "Garapan"
				},
				{
					"name": "Norway",
					"alphaTwo": "NO",
					"id": "578",
					"city": "Oslo"
				},
				{
					"name": "Oman",
					"alphaTwo": "OM",
					"id": "512",
					"city": "Masqat"
				},
				{
					"name": "Pakistan",
					"alphaTwo": "PK",
					"id": "586",
					"city": "Islamabad"
				},
				{
					"name": "Palau",
					"alphaTwo": "PW",
					"id": "585",
					"city": "Koror"
				},
				{
					"name": "Panama",
					"alphaTwo": "PA",
					"id": "591",
					"city": "Ciudad de Panam"
				},
				{
					"name": "Papua New Guinea",
					"alphaTwo": "PG",
					"id": "598",
					"city": "Port Moresby"
				},
				{
					"name": "Paraguay",
					"alphaTwo": "PY",
					"id": "600",
					"city": "Asunci"
				},
				{
					"name": "Peru",
					"alphaTwo": "PE",
					"id": "604",
					"city": "Lima"
				},
				{
					"name": "Philippines",
					"alphaTwo": "PH",
					"id": "608",
					"city": "Manila"
				},
				{
					"name": "Pitcairn",
					"alphaTwo": "PN",
					"id": "612",
					"city": "Adamstown"
				},
				{
					"name": "Poland",
					"alphaTwo": "PL",
					"id": "616",
					"city": "Warszawa"
				},
				{
					"name": "Portugal",
					"alphaTwo": "PT",
					"id": "620",
					"city": "Lisboa"
				},
				{
					"name": "Puerto Rico",
					"alphaTwo": "PR",
					"id": "630",
					"city": "San Juan"
				},
				{
					"name": "Qatar",
					"alphaTwo": "QA",
					"id": "634",
					"city": "Doha"
				},
				{
					"name": "Romania",
					"alphaTwo": "RO",
					"id": "642",
					"city": "Bucuresti"
				},
				{
					"name": "Russian Federation",
					"alphaTwo": "RU",
					"id": "643",
					"city": "Moscow"
				},
				{
					"name": "Rwanda",
					"alphaTwo": "RW",
					"id": "646",
					"city": "Kigali"
				},
				{
					"name": "Saint Kitts and Nevis",
					"alphaTwo": "KN",
					"id": "659",
					"city": "Basseterre"
				},
				{
					"name": "Saint Lucia",
					"alphaTwo": "LC",
					"id": "662",
					"city": "Castries"
				},
				{
					"name": "Saint Pierre and Miquelon",
					"alphaTwo": "PM",
					"id": "666",
					"city": "Saint-Pierre"
				},
				{
					"name": "Saint Vincent and the Grenadines",
					"alphaTwo": "VC",
					"id": "670",
					"city": "Kingstown"
				},
				{
					"name": "Samoa",
					"alphaTwo": "WS",
					"id": "882",
					"city": "Apia"
				},
				{
					"name": "San Marino",
					"alphaTwo": "SM",
					"id": "674",
					"city": "San Marino"
				},
				{
					"name": "Sao Tome and Principe",
					"alphaTwo": "ST",
					"id": "678",
					"city": "S"
				},
				{
					"name": "Saudi Arabia",
					"alphaTwo": "SA",
					"id": "682",
					"city": "Riyadh"
				},
				{
					"name": "Senegal",
					"alphaTwo": "SN",
					"id": "686",
					"city": "Dakar"
				},
				{
					"name": "Seychelles",
					"alphaTwo": "SC",
					"id": "690",
					"city": "Victoria"
				},
				{
					"name": "Sierra Leone",
					"alphaTwo": "SL",
					"id": "694",
					"city": "Freetown"
				},
				{
					"name": "Singapore",
					"alphaTwo": "SG",
					"id": "702",
					"city": "Singapore"
				},
				{
					"name": "Slovakia",
					"alphaTwo": "SK",
					"id": "703",
					"city": "Bratislava"
				},
				{
					"name": "Slovenia",
					"alphaTwo": "SI",
					"id": "705",
					"city": "Ljubljana"
				},
				{
					"name": "Solomon Islands",
					"alphaTwo": "SB",
					"id": "090",
					"city": "Honiara"
				},
				{
					"name": "Somalia",
					"alphaTwo": "SO",
					"id": "706",
					"city": "Mogadishu"
				},
				{
					"name": "South Africa",
					"alphaTwo": "ZA",
					"id": "710",
					"city": "Pretoria"
				},
				{
					"name": "South Georgia and the South Sandwich Islands",
					"alphaTwo": "GS",
					"id": "239",
					"city": null
				},
				{
					"name": "South Sudan",
					"alphaTwo": "SS",
					"id": "728",
					"city": "Juba"
				},
				{
					"name": "Spain",
					"alphaTwo": "ES",
					"id": "724",
					"city": "Madrid"
				},
				{
					"name": "Sri Lanka",
					"alphaTwo": "LK",
					"id": "144",
					"city": "Colombo"
				},
				{
					"name": "Sudan",
					"alphaTwo": "SD",
					"id": "729",
					"city": "Khartum"
				},
				{
					"name": "Suriname",
					"alphaTwo": "SR",
					"id": "740",
					"city": "Paramaribo"
				},
				{
					"name": "Swaziland",
					"alphaTwo": "SZ",
					"id": "748",
					"city": "Mbabane"
				},
				{
					"name": "Sweden",
					"alphaTwo": "SE",
					"id": "752",
					"city": "Stockholm"
				},
				{
					"name": "Switzerland",
					"alphaTwo": "CH",
					"id": "756",
					"city": "Bern"
				},
				{
					"name": "Tajikistan",
					"alphaTwo": "TJ",
					"id": "762",
					"city": "Dushanbe"
				},
				{
					"name": "Thailand",
					"alphaTwo": "TH",
					"id": "764",
					"city": "Bangkok"
				},
				{
					"name": "Togo",
					"alphaTwo": "TG",
					"id": "768",
					"city": "Lom"
				},
				{
					"name": "Tokelau",
					"alphaTwo": "TK",
					"id": "772",
					"city": "Fakaofo"
				},
				{
					"name": "Tonga",
					"alphaTwo": "TO",
					"id": "776",
					"city": "Nuku'alofa"
				},
				{
					"name": "Trinidad and Tobago",
					"alphaTwo": "TT",
					"id": "780",
					"city": "Port-of-Spain"
				},
				{
					"name": "Tunisia",
					"alphaTwo": "TN",
					"id": "788",
					"city": "Tunis"
				},
				{
					"name": "Turkey",
					"alphaTwo": "TR",
					"id": "792",
					"city": "Ankara"
				},
				{
					"name": "Turkmenistan",
					"alphaTwo": "TM",
					"id": "795",
					"city": "Ashgabat"
				},
				{
					"name": "Turks and Caicos Islands",
					"alphaTwo": "TC",
					"id": "796",
					"city": "Cockburn Town"
				},
				{
					"name": "Tuvalu",
					"alphaTwo": "TV",
					"id": "798",
					"city": "Funafuti"
				},
				{
					"name": "Uganda",
					"alphaTwo": "UG",
					"id": "800",
					"city": "Kampala"
				},
				{
					"name": "Ukraine",
					"alphaTwo": "UA",
					"id": "804",
					"city": "Kyiv"
				},
				{
					"name": "United Arab Emirates",
					"alphaTwo": "AE",
					"id": "784",
					"city": "Abu Dhabi"
				},
				{
					"name": "United States Minor Outlying Islands",
					"alphaTwo": "UM",
					"id": "581",
					"city": null
				},
				{
					"name": "Uruguay",
					"alphaTwo": "UY",
					"id": "858",
					"city": "Montevideo"
				},
				{
					"name": "Uzbekistan",
					"alphaTwo": "UZ",
					"id": "860",
					"city": "Toskent"
				},
				{
					"name": "Vanuatu",
					"alphaTwo": "VU",
					"id": "548",
					"city": "Port-Vila"
				},
				{
					"name": "Wallis and Futuna",
					"alphaTwo": "WF",
					"id": "876",
					"city": "Mata-Utu"
				},
				{
					"name": "Western Sahara",
					"alphaTwo": "EH",
					"id": "732",
					"city": "El-Aai"
				},
				{
					"name": "Yemen",
					"alphaTwo": "YE",
					"id": "887",
					"city": "Sanaa"
				},
				{
					"name": "Zambia",
					"alphaTwo": "ZM",
					"id": "894",
					"city": "Lusaka"
				},
				{
					"name": "Zimbabwe",
					"alphaTwo": "ZW",
					"id": "716",
					"city": "Harare"
				}
			],
			score: 0,
			settings: {
				numOfAnswers: 4,
				limit: 3,
				isGameOver: false
			}
		};
	}

	handleCorrectAnswer = function () {
		this.setState({flags: this.state.flags, score: this.state.score + 1})
	}.bind(this);

	handleIncorrectAnswer = function () {
		let handledSettings = _.cloneDeep(this.state.settings);
		handledSettings.limit -= 1;
		handledSettings.isGameOver = true;
		alert('Incorrect Answer');
		this.setState({flags: this.state.flags, settings: handledSettings});
	}.bind(this);

	render() {
	const currentFlag = this.state.flags.splice(Math.floor(Math.random() * (this.state.flags.length - 1)), 1)[0];
	let answers = [];
		for(let i =0; i< this.state.settings.numOfAnswers-1; i++){
			let random = Math.floor(Math.random() * (this.state.flags.length - 1));
			answers.push(this.state.flags[random]);
		}

		answers.push(currentFlag);
		answers = _.shuffle(answers);
		console.log(answers);
		return (
			<div className="Game container">
			<div className="row">
				<Flag link={currentFlag.alphaTwo.toLowerCase()}/>
				<Score score={this.state.score} retries={this.state.settings.limit}/>
			</div>
				<div className="row">
				<Answers options={answers} correctAnswer={currentFlag.id} onCorrectAnswer={this.handleCorrectAnswer} onIncorrectAnswer={this.handleIncorrectAnswer} retries={this.state.settings.limit}/>
				</div>
			</div>
		);
	}
}

export default Game;
