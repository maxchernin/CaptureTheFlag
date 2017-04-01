/**
 * Created by Max on 3/29/2017.
 */
import React, { Component } from 'react';
import Flag from './flag/flag';
import Answers from './answers/answers';
import Score from './score/score';

class Game extends Component {
	constructor(props){
		super(props);

		this.state = {
			currectFlag: 'load flags and select flag',
			flags: [
				{
					"name": "Afghanistan",
					"alphaTwo": "AF",
					"id": "004"
				},
				{
					"name": "Åland Islands",
					"alphaTwo": "AX",
					"id": "248"
				},
				{
					"name": "Albania",
					"alphaTwo": "AL",
					"id": "008"
				},
				{
					"name": "Algeria",
					"alphaTwo": "DZ",
					"id": "012"
				},
				{
					"name": "American Samoa",
					"alphaTwo": "AS",
					"id": "016"
				},
				{
					"name": "Andorra",
					"alphaTwo": "AD",
					"id": "020"
				},
				{
					"name": "Angola",
					"alphaTwo": "AO",
					"id": "024"
				},
				{
					"name": "Anguilla",
					"alphaTwo": "AI",
					"id": "660"
				},
				{
					"name": "Antarctica",
					"alphaTwo": "AQ",
					"id": "010"
				},
				{
					"name": "Antigua and Barbuda",
					"alphaTwo": "AG",
					"id": "028"
				},
				{
					"name": "Argentina",
					"alphaTwo": "AR",
					"id": "032"
				},
				{
					"name": "Armenia",
					"alphaTwo": "AM",
					"id": "051"
				},
				{
					"name": "Aruba",
					"alphaTwo": "AW",
					"id": "533"
				},
				{
					"name": "Australia",
					"alphaTwo": "AU",
					"id": "036"
				},
				{
					"name": "Austria",
					"alphaTwo": "AT",
					"id": "040"
				},
				{
					"name": "Azerbaijan",
					"alphaTwo": "AZ",
					"id": "031"
				},
				{
					"name": "Bahamas",
					"alphaTwo": "BS",
					"id": "044"
				},
				{
					"name": "Bahrain",
					"alphaTwo": "BH",
					"id": "048"
				},
				{
					"name": "Bangladesh",
					"alphaTwo": "BD",
					"id": "050"
				},
				{
					"name": "Barbados",
					"alphaTwo": "BB",
					"id": "052"
				},
				{
					"name": "Belarus",
					"alphaTwo": "BY",
					"id": "112"
				},
				{
					"name": "Belgium",
					"alphaTwo": "BE",
					"id": "056"
				},
				{
					"name": "Belize",
					"alphaTwo": "BZ",
					"id": "084"
				},
				{
					"name": "Benin",
					"alphaTwo": "BJ",
					"id": "204"
				},
				{
					"name": "Bermuda",
					"alphaTwo": "BM",
					"id": "060"
				},
				{
					"name": "Bhutan",
					"alphaTwo": "BT",
					"id": "064"
				},
				{
					"name": "Bolivia (Plurinational State of)",
					"alphaTwo": "BO",
					"id": "068"
				},
				{
					"name": "Bonaire, Sint Eustatius and Saba",
					"alphaTwo": "BQ",
					"id": "535"
				},
				{
					"name": "Bosnia and Herzegovina",
					"alphaTwo": "BA",
					"id": "070"
				},
				{
					"name": "Botswana",
					"alphaTwo": "BW",
					"id": "072"
				},
				{
					"name": "Bouvet Island",
					"alphaTwo": "BV",
					"id": "074"
				},
				{
					"name": "Brazil",
					"alphaTwo": "BR",
					"id": "076"
				},
				{
					"name": "British Indian Ocean Territory",
					"alphaTwo": "IO",
					"id": "086"
				},
				{
					"name": "Brunei Darussalam",
					"alphaTwo": "BN",
					"id": "096"
				},
				{
					"name": "Bulgaria",
					"alphaTwo": "BG",
					"id": "100"
				},
				{
					"name": "Burkina Faso",
					"alphaTwo": "BF",
					"id": "854"
				},
				{
					"name": "Burundi",
					"alphaTwo": "BI",
					"id": "108"
				},
				{
					"name": "Cambodia",
					"alphaTwo": "KH",
					"id": "116"
				},
				{
					"name": "Cameroon",
					"alphaTwo": "CM",
					"id": "120"
				},
				{
					"name": "Canada",
					"alphaTwo": "CA",
					"id": "124"
				},
				{
					"name": "Cabo Verde",
					"alphaTwo": "CV",
					"id": "132"
				},
				{
					"name": "Cayman Islands",
					"alphaTwo": "KY",
					"id": "136"
				},
				{
					"name": "Central African Republic",
					"alphaTwo": "CF",
					"id": "140"
				},
				{
					"name": "Chad",
					"alphaTwo": "TD",
					"id": "148"
				},
				{
					"name": "Chile",
					"alphaTwo": "CL",
					"id": "152"
				},
				{
					"name": "China",
					"alphaTwo": "CN",
					"id": "156"
				},
				{
					"name": "Christmas Island",
					"alphaTwo": "CX",
					"id": "162"
				},
				{
					"name": "Cocos (Keeling) Islands",
					"alphaTwo": "CC",
					"id": "166"
				},
				{
					"name": "Colombia",
					"alphaTwo": "CO",
					"id": "170"
				},
				{
					"name": "Comoros",
					"alphaTwo": "KM",
					"id": "174"
				},
				{
					"name": "Congo",
					"alphaTwo": "CG",
					"id": "178"
				},
				{
					"name": "Congo (Democratic Republic of the)",
					"alphaTwo": "CD",
					"id": "180"
				},
				{
					"name": "Cook Islands",
					"alphaTwo": "CK",
					"id": "184"
				},
				{
					"name": "Costa Rica",
					"alphaTwo": "CR",
					"id": "188"
				},
				{
					"name": "Côte d'Ivoire",
					"alphaTwo": "CI",
					"id": "384"
				},
				{
					"name": "Croatia",
					"alphaTwo": "HR",
					"id": "191"
				},
				{
					"name": "Cuba",
					"alphaTwo": "CU",
					"id": "192"
				},
				{
					"name": "Curaçao",
					"alphaTwo": "CW",
					"id": "531"
				},
				{
					"name": "Cyprus",
					"alphaTwo": "CY",
					"id": "196"
				},
				{
					"name": "Czech Republic",
					"alphaTwo": "CZ",
					"id": "203"
				},
				{
					"name": "Denmark",
					"alphaTwo": "DK",
					"id": "208"
				},
				{
					"name": "Djibouti",
					"alphaTwo": "DJ",
					"id": "262"
				},
				{
					"name": "Dominica",
					"alphaTwo": "DM",
					"id": "212"
				},
				{
					"name": "Dominican Republic",
					"alphaTwo": "DO",
					"id": "214"
				},
				{
					"name": "Ecuador",
					"alphaTwo": "EC",
					"id": "218"
				},
				{
					"name": "Egypt",
					"alphaTwo": "EG",
					"id": "818"
				},
				{
					"name": "El Salvador",
					"alphaTwo": "SV",
					"id": "222"
				},
				{
					"name": "Equatorial Guinea",
					"alphaTwo": "GQ",
					"id": "226"
				},
				{
					"name": "Eritrea",
					"alphaTwo": "ER",
					"id": "232"
				},
				{
					"name": "Estonia",
					"alphaTwo": "EE",
					"id": "233"
				},
				{
					"name": "Ethiopia",
					"alphaTwo": "ET",
					"id": "231"
				},
				{
					"name": "Falkland Islands (Malvinas)",
					"alphaTwo": "FK",
					"id": "238"
				},
				{
					"name": "Faroe Islands",
					"alphaTwo": "FO",
					"id": "234"
				},
				{
					"name": "Fiji",
					"alphaTwo": "FJ",
					"id": "242"
				},
				{
					"name": "Finland",
					"alphaTwo": "FI",
					"id": "246"
				},
				{
					"name": "France",
					"alphaTwo": "FR",
					"id": "250"
				},
				{
					"name": "French Guiana",
					"alphaTwo": "GF",
					"id": "254"
				},
				{
					"name": "French Polynesia",
					"alphaTwo": "PF",
					"id": "258"
				},
				{
					"name": "French Southern Territories",
					"alphaTwo": "TF",
					"id": "260"
				},
				{
					"name": "Gabon",
					"alphaTwo": "GA",
					"id": "266"
				},
				{
					"name": "Gambia",
					"alphaTwo": "GM",
					"id": "270"
				},
				{
					"name": "Georgia",
					"alphaTwo": "GE",
					"id": "268"
				},
				{
					"name": "Germany",
					"alphaTwo": "DE",
					"id": "276"
				},
				{
					"name": "Ghana",
					"alphaTwo": "GH",
					"id": "288"
				},
				{
					"name": "Gibraltar",
					"alphaTwo": "GI",
					"id": "292"
				},
				{
					"name": "Greece",
					"alphaTwo": "GR",
					"id": "300"
				},
				{
					"name": "Greenland",
					"alphaTwo": "GL",
					"id": "304"
				},
				{
					"name": "Grenada",
					"alphaTwo": "GD",
					"id": "308"
				},
				{
					"name": "Guadeloupe",
					"alphaTwo": "GP",
					"id": "312"
				},
				{
					"name": "Guam",
					"alphaTwo": "GU",
					"id": "316"
				},
				{
					"name": "Guatemala",
					"alphaTwo": "GT",
					"id": "320"
				},
				{
					"name": "Guernsey",
					"alphaTwo": "GG",
					"id": "831"
				},
				{
					"name": "Guinea",
					"alphaTwo": "GN",
					"id": "324"
				},
				{
					"name": "Guinea-Bissau",
					"alphaTwo": "GW",
					"id": "624"
				},
				{
					"name": "Guyana",
					"alphaTwo": "GY",
					"id": "328"
				},
				{
					"name": "Haiti",
					"alphaTwo": "HT",
					"id": "332"
				},
				{
					"name": "Heard Island and McDonald Islands",
					"alphaTwo": "HM",
					"id": "334"
				},
				{
					"name": "Holy See",
					"alphaTwo": "VA",
					"id": "336"
				},
				{
					"name": "Honduras",
					"alphaTwo": "HN",
					"id": "340"
				},
				{
					"name": "Hong Kong",
					"alphaTwo": "HK",
					"id": "344"
				},
				{
					"name": "Hungary",
					"alphaTwo": "HU",
					"id": "348"
				},
				{
					"name": "Iceland",
					"alphaTwo": "IS",
					"id": "352"
				},
				{
					"name": "India",
					"alphaTwo": "IN",
					"id": "356"
				},
				{
					"name": "Indonesia",
					"alphaTwo": "ID",
					"id": "360"
				},
				{
					"name": "Iran (Islamic Republic of)",
					"alphaTwo": "IR",
					"id": "364"
				},
				{
					"name": "Iraq",
					"alphaTwo": "IQ",
					"id": "368"
				},
				{
					"name": "Ireland",
					"alphaTwo": "IE",
					"id": "372"
				},
				{
					"name": "Isle of Man",
					"alphaTwo": "IM",
					"id": "833"
				},
				{
					"name": "Israel",
					"alphaTwo": "IL",
					"id": "376"
				},
				{
					"name": "Italy",
					"alphaTwo": "IT",
					"id": "380"
				},
				{
					"name": "Jamaica",
					"alphaTwo": "JM",
					"id": "388"
				},
				{
					"name": "Japan",
					"alphaTwo": "JP",
					"id": "392"
				},
				{
					"name": "Jersey",
					"alphaTwo": "JE",
					"id": "832"
				},
				{
					"name": "Jordan",
					"alphaTwo": "JO",
					"id": "400"
				},
				{
					"name": "Kazakhstan",
					"alphaTwo": "KZ",
					"id": "398"
				},
				{
					"name": "Kenya",
					"alphaTwo": "KE",
					"id": "404"
				},
				{
					"name": "Kiribati",
					"alphaTwo": "KI",
					"id": "296"
				},
				{
					"name": "Korea (Democratic People's Republic of)",
					"alphaTwo": "KP",
					"id": "408"
				},
				{
					"name": "Korea (Republic of)",
					"alphaTwo": "KR",
					"id": "410"
				},
				{
					"name": "Kuwait",
					"alphaTwo": "KW",
					"id": "414"
				},
				{
					"name": "Kyrgyzstan",
					"alphaTwo": "KG",
					"id": "417"
				},
				{
					"name": "Lao People's Democratic Republic",
					"alphaTwo": "LA",
					"id": "418"
				},
				{
					"name": "Latvia",
					"alphaTwo": "LV",
					"id": "428"
				},
				{
					"name": "Lebanon",
					"alphaTwo": "LB",
					"id": "422"
				},
				{
					"name": "Lesotho",
					"alphaTwo": "LS",
					"id": "426"
				},
				{
					"name": "Liberia",
					"alphaTwo": "LR",
					"id": "430"
				},
				{
					"name": "Libya",
					"alphaTwo": "LY",
					"id": "434"
				},
				{
					"name": "Liechtenstein",
					"alphaTwo": "LI",
					"id": "438"
				},
				{
					"name": "Lithuania",
					"alphaTwo": "LT",
					"id": "440"
				},
				{
					"name": "Luxembourg",
					"alphaTwo": "LU",
					"id": "442"
				},
				{
					"name": "Macao",
					"alphaTwo": "MO",
					"id": "446"
				},
				{
					"name": "Macedonia (the former Yugoslav Republic of)",
					"alphaTwo": "MK",
					"id": "807"
				},
				{
					"name": "Madagascar",
					"alphaTwo": "MG",
					"id": "450"
				},
				{
					"name": "Malawi",
					"alphaTwo": "MW",
					"id": "454"
				},
				{
					"name": "Malaysia",
					"alphaTwo": "MY",
					"id": "458"
				},
				{
					"name": "Maldives",
					"alphaTwo": "MV",
					"id": "462"
				},
				{
					"name": "Mali",
					"alphaTwo": "ML",
					"id": "466"
				},
				{
					"name": "Malta",
					"alphaTwo": "MT",
					"id": "470"
				},
				{
					"name": "Marshall Islands",
					"alphaTwo": "MH",
					"id": "584"
				},
				{
					"name": "Martinique",
					"alphaTwo": "MQ",
					"id": "474"
				},
				{
					"name": "Mauritania",
					"alphaTwo": "MR",
					"id": "478"
				},
				{
					"name": "Mauritius",
					"alphaTwo": "MU",
					"id": "480"
				},
				{
					"name": "Mayotte",
					"alphaTwo": "YT",
					"id": "175"
				},
				{
					"name": "Mexico",
					"alphaTwo": "MX",
					"id": "484"
				},
				{
					"name": "Micronesia (Federated States of)",
					"alphaTwo": "FM",
					"id": "583"
				},
				{
					"name": "Moldova (Republic of)",
					"alphaTwo": "MD",
					"id": "498"
				},
				{
					"name": "Monaco",
					"alphaTwo": "MC",
					"id": "492"
				},
				{
					"name": "Mongolia",
					"alphaTwo": "MN",
					"id": "496"
				},
				{
					"name": "Montenegro",
					"alphaTwo": "ME",
					"id": "499"
				},
				{
					"name": "Montserrat",
					"alphaTwo": "MS",
					"id": "500"
				},
				{
					"name": "Morocco",
					"alphaTwo": "MA",
					"id": "504"
				},
				{
					"name": "Mozambique",
					"alphaTwo": "MZ",
					"id": "508"
				},
				{
					"name": "Myanmar",
					"alphaTwo": "MM",
					"id": "104"
				},
				{
					"name": "Namibia",
					"alphaTwo": "NA",
					"id": "516"
				},
				{
					"name": "Nauru",
					"alphaTwo": "NR",
					"id": "520"
				},
				{
					"name": "Nepal",
					"alphaTwo": "NP",
					"id": "524"
				},
				{
					"name": "Netherlands",
					"alphaTwo": "NL",
					"id": "528"
				},
				{
					"name": "New Caledonia",
					"alphaTwo": "NC",
					"id": "540"
				},
				{
					"name": "New Zealand",
					"alphaTwo": "NZ",
					"id": "554"
				},
				{
					"name": "Nicaragua",
					"alphaTwo": "NI",
					"id": "558"
				},
				{
					"name": "Niger",
					"alphaTwo": "NE",
					"id": "562"
				},
				{
					"name": "Nigeria",
					"alphaTwo": "NG",
					"id": "566"
				},
				{
					"name": "Niue",
					"alphaTwo": "NU",
					"id": "570"
				},
				{
					"name": "Norfolk Island",
					"alphaTwo": "NF",
					"id": "574"
				},
				{
					"name": "Northern Mariana Islands",
					"alphaTwo": "MP",
					"id": "580"
				},
				{
					"name": "Norway",
					"alphaTwo": "NO",
					"id": "578"
				},
				{
					"name": "Oman",
					"alphaTwo": "OM",
					"id": "512"
				},
				{
					"name": "Pakistan",
					"alphaTwo": "PK",
					"id": "586"
				},
				{
					"name": "Palau",
					"alphaTwo": "PW",
					"id": "585"
				},
				{
					"name": "Palestine, State of",
					"alphaTwo": "PS",
					"id": "275"
				},
				{
					"name": "Panama",
					"alphaTwo": "PA",
					"id": "591"
				},
				{
					"name": "Papua New Guinea",
					"alphaTwo": "PG",
					"id": "598"
				},
				{
					"name": "Paraguay",
					"alphaTwo": "PY",
					"id": "600"
				},
				{
					"name": "Peru",
					"alphaTwo": "PE",
					"id": "604"
				},
				{
					"name": "Philippines",
					"alphaTwo": "PH",
					"id": "608"
				},
				{
					"name": "Pitcairn",
					"alphaTwo": "PN",
					"id": "612"
				},
				{
					"name": "Poland",
					"alphaTwo": "PL",
					"id": "616"
				},
				{
					"name": "Portugal",
					"alphaTwo": "PT",
					"id": "620"
				},
				{
					"name": "Puerto Rico",
					"alphaTwo": "PR",
					"id": "630"
				},
				{
					"name": "Qatar",
					"alphaTwo": "QA",
					"id": "634"
				},
				{
					"name": "Réunion",
					"alphaTwo": "RE",
					"id": "638"
				},
				{
					"name": "Romania",
					"alphaTwo": "RO",
					"id": "642"
				},
				{
					"name": "Russian Federation",
					"alphaTwo": "RU",
					"id": "643"
				},
				{
					"name": "Rwanda",
					"alphaTwo": "RW",
					"id": "646"
				},
				{
					"name": "Saint Barthélemy",
					"alphaTwo": "BL",
					"id": "652"
				},
				{
					"name": "Saint Helena, Ascension and Tristan da Cunha",
					"alphaTwo": "SH",
					"id": "654"
				},
				{
					"name": "Saint Kitts and Nevis",
					"alphaTwo": "KN",
					"id": "659"
				},
				{
					"name": "Saint Lucia",
					"alphaTwo": "LC",
					"id": "662"
				},
				{
					"name": "Saint Martin (French part)",
					"alphaTwo": "MF",
					"id": "663"
				},
				{
					"name": "Saint Pierre and Miquelon",
					"alphaTwo": "PM",
					"id": "666"
				},
				{
					"name": "Saint Vincent and the Grenadines",
					"alphaTwo": "VC",
					"id": "670"
				},
				{
					"name": "Samoa",
					"alphaTwo": "WS",
					"id": "882"
				},
				{
					"name": "San Marino",
					"alphaTwo": "SM",
					"id": "674"
				},
				{
					"name": "Sao Tome and Principe",
					"alphaTwo": "ST",
					"id": "678"
				},
				{
					"name": "Saudi Arabia",
					"alphaTwo": "SA",
					"id": "682"
				},
				{
					"name": "Senegal",
					"alphaTwo": "SN",
					"id": "686"
				},
				{
					"name": "Serbia",
					"alphaTwo": "RS",
					"id": "688"
				},
				{
					"name": "Seychelles",
					"alphaTwo": "SC",
					"id": "690"
				},
				{
					"name": "Sierra Leone",
					"alphaTwo": "SL",
					"id": "694"
				},
				{
					"name": "Singapore",
					"alphaTwo": "SG",
					"id": "702"
				},
				{
					"name": "Sint Maarten (Dutch part)",
					"alphaTwo": "SX",
					"id": "534"
				},
				{
					"name": "Slovakia",
					"alphaTwo": "SK",
					"id": "703"
				},
				{
					"name": "Slovenia",
					"alphaTwo": "SI",
					"id": "705"
				},
				{
					"name": "Solomon Islands",
					"alphaTwo": "SB",
					"id": "090"
				},
				{
					"name": "Somalia",
					"alphaTwo": "SO",
					"id": "706"
				},
				{
					"name": "South Africa",
					"alphaTwo": "ZA",
					"id": "710"
				},
				{
					"name": "South Georgia and the South Sandwich Islands",
					"alphaTwo": "GS",
					"id": "239"
				},
				{
					"name": "South Sudan",
					"alphaTwo": "SS",
					"id": "728"
				},
				{
					"name": "Spain",
					"alphaTwo": "ES",
					"id": "724"
				},
				{
					"name": "Sri Lanka",
					"alphaTwo": "LK",
					"id": "144"
				},
				{
					"name": "Sudan",
					"alphaTwo": "SD",
					"id": "729"
				},
				{
					"name": "Suriname",
					"alphaTwo": "SR",
					"id": "740"
				},
				{
					"name": "Svalbard and Jan Mayen",
					"alphaTwo": "SJ",
					"id": "744"
				},
				{
					"name": "Swaziland",
					"alphaTwo": "SZ",
					"id": "748"
				},
				{
					"name": "Sweden",
					"alphaTwo": "SE",
					"id": "752"
				},
				{
					"name": "Switzerland",
					"alphaTwo": "CH",
					"id": "756"
				},
				{
					"name": "Syrian Arab Republic",
					"alphaTwo": "SY",
					"id": "760"
				},
				{
					"name": "Taiwan, Province of China",
					"alphaTwo": "TW",
					"id": "158"
				},
				{
					"name": "Tajikistan",
					"alphaTwo": "TJ",
					"id": "762"
				},
				{
					"name": "Tanzania, United Republic of",
					"alphaTwo": "TZ",
					"id": "834"
				},
				{
					"name": "Thailand",
					"alphaTwo": "TH",
					"id": "764"
				},
				{
					"name": "Timor-Leste",
					"alphaTwo": "TL",
					"id": "626"
				},
				{
					"name": "Togo",
					"alphaTwo": "TG",
					"id": "768"
				},
				{
					"name": "Tokelau",
					"alphaTwo": "TK",
					"id": "772"
				},
				{
					"name": "Tonga",
					"alphaTwo": "TO",
					"id": "776"
				},
				{
					"name": "Trinidad and Tobago",
					"alphaTwo": "TT",
					"id": "780"
				},
				{
					"name": "Tunisia",
					"alphaTwo": "TN",
					"id": "788"
				},
				{
					"name": "Turkey",
					"alphaTwo": "TR",
					"id": "792"
				},
				{
					"name": "Turkmenistan",
					"alphaTwo": "TM",
					"id": "795"
				},
				{
					"name": "Turks and Caicos Islands",
					"alphaTwo": "TC",
					"id": "796"
				},
				{
					"name": "Tuvalu",
					"alphaTwo": "TV",
					"id": "798"
				},
				{
					"name": "Uganda",
					"alphaTwo": "UG",
					"id": "800"
				},
				{
					"name": "Ukraine",
					"alphaTwo": "UA",
					"id": "804"
				},
				{
					"name": "United Arab Emirates",
					"alphaTwo": "AE",
					"id": "784"
				},
				{
					"name": "United Kingdom of Great Britain and Northern Ireland",
					"alphaTwo": "GB",
					"id": "826"
				},
				{
					"name": "United States of America",
					"alphaTwo": "US",
					"id": "840"
				},
				{
					"name": "United States Minor Outlying Islands",
					"alphaTwo": "UM",
					"id": "581"
				},
				{
					"name": "Uruguay",
					"alphaTwo": "UY",
					"id": "858"
				},
				{
					"name": "Uzbekistan",
					"alphaTwo": "UZ",
					"id": "860"
				},
				{
					"name": "Vanuatu",
					"alphaTwo": "VU",
					"id": "548"
				},
				{
					"name": "Venezuela (Bolivarian Republic of)",
					"alphaTwo": "VE",
					"id": "862"
				},
				{
					"name": "Viet Nam",
					"alphaTwo": "VN",
					"id": "704"
				},
				{
					"name": "Virgin Islands (British)",
					"alphaTwo": "VG",
					"id": "092"
				},
				{
					"name": "Virgin Islands (U.S.)",
					"alphaTwo": "VI",
					"id": "850"
				},
				{
					"name": "Wallis and Futuna",
					"alphaTwo": "WF",
					"id": "876"
				},
				{
					"name": "Western Sahara",
					"alphaTwo": "EH",
					"id": "732"
				},
				{
					"name": "Yemen",
					"alphaTwo": "YE",
					"id": "887"
				},
				{
					"name": "Zambia",
					"alphaTwo": "ZM",
					"id": "894"
				},
				{
					"name": "Zimbabwe",
					"alphaTwo": "ZW",
					"id": "716"
				}
			]
		};
		this.flags = [
			{
				"name": "Afghanistan",
				"alphaTwo": "AF",
				"id": "004"
			},
			{
				"name": "Åland Islands",
				"alphaTwo": "AX",
				"id": "248"
			},
			{
				"name": "Albania",
				"alphaTwo": "AL",
				"id": "008"
			},
			{
				"name": "Algeria",
				"alphaTwo": "DZ",
				"id": "012"
			},
			{
				"name": "American Samoa",
				"alphaTwo": "AS",
				"id": "016"
			},
			{
				"name": "Andorra",
				"alphaTwo": "AD",
				"id": "020"
			},
			{
				"name": "Angola",
				"alphaTwo": "AO",
				"id": "024"
			},
			{
				"name": "Anguilla",
				"alphaTwo": "AI",
				"id": "660"
			},
			{
				"name": "Antarctica",
				"alphaTwo": "AQ",
				"id": "010"
			},
			{
				"name": "Antigua and Barbuda",
				"alphaTwo": "AG",
				"id": "028"
			},
			{
				"name": "Argentina",
				"alphaTwo": "AR",
				"id": "032"
			},
			{
				"name": "Armenia",
				"alphaTwo": "AM",
				"id": "051"
			},
			{
				"name": "Aruba",
				"alphaTwo": "AW",
				"id": "533"
			},
			{
				"name": "Australia",
				"alphaTwo": "AU",
				"id": "036"
			},
			{
				"name": "Austria",
				"alphaTwo": "AT",
				"id": "040"
			},
			{
				"name": "Azerbaijan",
				"alphaTwo": "AZ",
				"id": "031"
			},
			{
				"name": "Bahamas",
				"alphaTwo": "BS",
				"id": "044"
			},
			{
				"name": "Bahrain",
				"alphaTwo": "BH",
				"id": "048"
			},
			{
				"name": "Bangladesh",
				"alphaTwo": "BD",
				"id": "050"
			},
			{
				"name": "Barbados",
				"alphaTwo": "BB",
				"id": "052"
			},
			{
				"name": "Belarus",
				"alphaTwo": "BY",
				"id": "112"
			},
			{
				"name": "Belgium",
				"alphaTwo": "BE",
				"id": "056"
			},
			{
				"name": "Belize",
				"alphaTwo": "BZ",
				"id": "084"
			},
			{
				"name": "Benin",
				"alphaTwo": "BJ",
				"id": "204"
			},
			{
				"name": "Bermuda",
				"alphaTwo": "BM",
				"id": "060"
			},
			{
				"name": "Bhutan",
				"alphaTwo": "BT",
				"id": "064"
			},
			{
				"name": "Bolivia (Plurinational State of)",
				"alphaTwo": "BO",
				"id": "068"
			},
			{
				"name": "Bonaire, Sint Eustatius and Saba",
				"alphaTwo": "BQ",
				"id": "535"
			},
			{
				"name": "Bosnia and Herzegovina",
				"alphaTwo": "BA",
				"id": "070"
			},
			{
				"name": "Botswana",
				"alphaTwo": "BW",
				"id": "072"
			},
			{
				"name": "Bouvet Island",
				"alphaTwo": "BV",
				"id": "074"
			},
			{
				"name": "Brazil",
				"alphaTwo": "BR",
				"id": "076"
			},
			{
				"name": "British Indian Ocean Territory",
				"alphaTwo": "IO",
				"id": "086"
			},
			{
				"name": "Brunei Darussalam",
				"alphaTwo": "BN",
				"id": "096"
			},
			{
				"name": "Bulgaria",
				"alphaTwo": "BG",
				"id": "100"
			},
			{
				"name": "Burkina Faso",
				"alphaTwo": "BF",
				"id": "854"
			},
			{
				"name": "Burundi",
				"alphaTwo": "BI",
				"id": "108"
			},
			{
				"name": "Cambodia",
				"alphaTwo": "KH",
				"id": "116"
			},
			{
				"name": "Cameroon",
				"alphaTwo": "CM",
				"id": "120"
			},
			{
				"name": "Canada",
				"alphaTwo": "CA",
				"id": "124"
			},
			{
				"name": "Cabo Verde",
				"alphaTwo": "CV",
				"id": "132"
			},
			{
				"name": "Cayman Islands",
				"alphaTwo": "KY",
				"id": "136"
			},
			{
				"name": "Central African Republic",
				"alphaTwo": "CF",
				"id": "140"
			},
			{
				"name": "Chad",
				"alphaTwo": "TD",
				"id": "148"
			},
			{
				"name": "Chile",
				"alphaTwo": "CL",
				"id": "152"
			},
			{
				"name": "China",
				"alphaTwo": "CN",
				"id": "156"
			},
			{
				"name": "Christmas Island",
				"alphaTwo": "CX",
				"id": "162"
			},
			{
				"name": "Cocos (Keeling) Islands",
				"alphaTwo": "CC",
				"id": "166"
			},
			{
				"name": "Colombia",
				"alphaTwo": "CO",
				"id": "170"
			},
			{
				"name": "Comoros",
				"alphaTwo": "KM",
				"id": "174"
			},
			{
				"name": "Congo",
				"alphaTwo": "CG",
				"id": "178"
			},
			{
				"name": "Congo (Democratic Republic of the)",
				"alphaTwo": "CD",
				"id": "180"
			},
			{
				"name": "Cook Islands",
				"alphaTwo": "CK",
				"id": "184"
			},
			{
				"name": "Costa Rica",
				"alphaTwo": "CR",
				"id": "188"
			},
			{
				"name": "Côte d'Ivoire",
				"alphaTwo": "CI",
				"id": "384"
			},
			{
				"name": "Croatia",
				"alphaTwo": "HR",
				"id": "191"
			},
			{
				"name": "Cuba",
				"alphaTwo": "CU",
				"id": "192"
			},
			{
				"name": "Curaçao",
				"alphaTwo": "CW",
				"id": "531"
			},
			{
				"name": "Cyprus",
				"alphaTwo": "CY",
				"id": "196"
			},
			{
				"name": "Czech Republic",
				"alphaTwo": "CZ",
				"id": "203"
			},
			{
				"name": "Denmark",
				"alphaTwo": "DK",
				"id": "208"
			},
			{
				"name": "Djibouti",
				"alphaTwo": "DJ",
				"id": "262"
			},
			{
				"name": "Dominica",
				"alphaTwo": "DM",
				"id": "212"
			},
			{
				"name": "Dominican Republic",
				"alphaTwo": "DO",
				"id": "214"
			},
			{
				"name": "Ecuador",
				"alphaTwo": "EC",
				"id": "218"
			},
			{
				"name": "Egypt",
				"alphaTwo": "EG",
				"id": "818"
			},
			{
				"name": "El Salvador",
				"alphaTwo": "SV",
				"id": "222"
			},
			{
				"name": "Equatorial Guinea",
				"alphaTwo": "GQ",
				"id": "226"
			},
			{
				"name": "Eritrea",
				"alphaTwo": "ER",
				"id": "232"
			},
			{
				"name": "Estonia",
				"alphaTwo": "EE",
				"id": "233"
			},
			{
				"name": "Ethiopia",
				"alphaTwo": "ET",
				"id": "231"
			},
			{
				"name": "Falkland Islands (Malvinas)",
				"alphaTwo": "FK",
				"id": "238"
			},
			{
				"name": "Faroe Islands",
				"alphaTwo": "FO",
				"id": "234"
			},
			{
				"name": "Fiji",
				"alphaTwo": "FJ",
				"id": "242"
			},
			{
				"name": "Finland",
				"alphaTwo": "FI",
				"id": "246"
			},
			{
				"name": "France",
				"alphaTwo": "FR",
				"id": "250"
			},
			{
				"name": "French Guiana",
				"alphaTwo": "GF",
				"id": "254"
			},
			{
				"name": "French Polynesia",
				"alphaTwo": "PF",
				"id": "258"
			},
			{
				"name": "French Southern Territories",
				"alphaTwo": "TF",
				"id": "260"
			},
			{
				"name": "Gabon",
				"alphaTwo": "GA",
				"id": "266"
			},
			{
				"name": "Gambia",
				"alphaTwo": "GM",
				"id": "270"
			},
			{
				"name": "Georgia",
				"alphaTwo": "GE",
				"id": "268"
			},
			{
				"name": "Germany",
				"alphaTwo": "DE",
				"id": "276"
			},
			{
				"name": "Ghana",
				"alphaTwo": "GH",
				"id": "288"
			},
			{
				"name": "Gibraltar",
				"alphaTwo": "GI",
				"id": "292"
			},
			{
				"name": "Greece",
				"alphaTwo": "GR",
				"id": "300"
			},
			{
				"name": "Greenland",
				"alphaTwo": "GL",
				"id": "304"
			},
			{
				"name": "Grenada",
				"alphaTwo": "GD",
				"id": "308"
			},
			{
				"name": "Guadeloupe",
				"alphaTwo": "GP",
				"id": "312"
			},
			{
				"name": "Guam",
				"alphaTwo": "GU",
				"id": "316"
			},
			{
				"name": "Guatemala",
				"alphaTwo": "GT",
				"id": "320"
			},
			{
				"name": "Guernsey",
				"alphaTwo": "GG",
				"id": "831"
			},
			{
				"name": "Guinea",
				"alphaTwo": "GN",
				"id": "324"
			},
			{
				"name": "Guinea-Bissau",
				"alphaTwo": "GW",
				"id": "624"
			},
			{
				"name": "Guyana",
				"alphaTwo": "GY",
				"id": "328"
			},
			{
				"name": "Haiti",
				"alphaTwo": "HT",
				"id": "332"
			},
			{
				"name": "Heard Island and McDonald Islands",
				"alphaTwo": "HM",
				"id": "334"
			},
			{
				"name": "Holy See",
				"alphaTwo": "VA",
				"id": "336"
			},
			{
				"name": "Honduras",
				"alphaTwo": "HN",
				"id": "340"
			},
			{
				"name": "Hong Kong",
				"alphaTwo": "HK",
				"id": "344"
			},
			{
				"name": "Hungary",
				"alphaTwo": "HU",
				"id": "348"
			},
			{
				"name": "Iceland",
				"alphaTwo": "IS",
				"id": "352"
			},
			{
				"name": "India",
				"alphaTwo": "IN",
				"id": "356"
			},
			{
				"name": "Indonesia",
				"alphaTwo": "ID",
				"id": "360"
			},
			{
				"name": "Iran (Islamic Republic of)",
				"alphaTwo": "IR",
				"id": "364"
			},
			{
				"name": "Iraq",
				"alphaTwo": "IQ",
				"id": "368"
			},
			{
				"name": "Ireland",
				"alphaTwo": "IE",
				"id": "372"
			},
			{
				"name": "Isle of Man",
				"alphaTwo": "IM",
				"id": "833"
			},
			{
				"name": "Israel",
				"alphaTwo": "IL",
				"id": "376"
			},
			{
				"name": "Italy",
				"alphaTwo": "IT",
				"id": "380"
			},
			{
				"name": "Jamaica",
				"alphaTwo": "JM",
				"id": "388"
			},
			{
				"name": "Japan",
				"alphaTwo": "JP",
				"id": "392"
			},
			{
				"name": "Jersey",
				"alphaTwo": "JE",
				"id": "832"
			},
			{
				"name": "Jordan",
				"alphaTwo": "JO",
				"id": "400"
			},
			{
				"name": "Kazakhstan",
				"alphaTwo": "KZ",
				"id": "398"
			},
			{
				"name": "Kenya",
				"alphaTwo": "KE",
				"id": "404"
			},
			{
				"name": "Kiribati",
				"alphaTwo": "KI",
				"id": "296"
			},
			{
				"name": "Korea (Democratic People's Republic of)",
				"alphaTwo": "KP",
				"id": "408"
			},
			{
				"name": "Korea (Republic of)",
				"alphaTwo": "KR",
				"id": "410"
			},
			{
				"name": "Kuwait",
				"alphaTwo": "KW",
				"id": "414"
			},
			{
				"name": "Kyrgyzstan",
				"alphaTwo": "KG",
				"id": "417"
			},
			{
				"name": "Lao People's Democratic Republic",
				"alphaTwo": "LA",
				"id": "418"
			},
			{
				"name": "Latvia",
				"alphaTwo": "LV",
				"id": "428"
			},
			{
				"name": "Lebanon",
				"alphaTwo": "LB",
				"id": "422"
			},
			{
				"name": "Lesotho",
				"alphaTwo": "LS",
				"id": "426"
			},
			{
				"name": "Liberia",
				"alphaTwo": "LR",
				"id": "430"
			},
			{
				"name": "Libya",
				"alphaTwo": "LY",
				"id": "434"
			},
			{
				"name": "Liechtenstein",
				"alphaTwo": "LI",
				"id": "438"
			},
			{
				"name": "Lithuania",
				"alphaTwo": "LT",
				"id": "440"
			},
			{
				"name": "Luxembourg",
				"alphaTwo": "LU",
				"id": "442"
			},
			{
				"name": "Macao",
				"alphaTwo": "MO",
				"id": "446"
			},
			{
				"name": "Macedonia (the former Yugoslav Republic of)",
				"alphaTwo": "MK",
				"id": "807"
			},
			{
				"name": "Madagascar",
				"alphaTwo": "MG",
				"id": "450"
			},
			{
				"name": "Malawi",
				"alphaTwo": "MW",
				"id": "454"
			},
			{
				"name": "Malaysia",
				"alphaTwo": "MY",
				"id": "458"
			},
			{
				"name": "Maldives",
				"alphaTwo": "MV",
				"id": "462"
			},
			{
				"name": "Mali",
				"alphaTwo": "ML",
				"id": "466"
			},
			{
				"name": "Malta",
				"alphaTwo": "MT",
				"id": "470"
			},
			{
				"name": "Marshall Islands",
				"alphaTwo": "MH",
				"id": "584"
			},
			{
				"name": "Martinique",
				"alphaTwo": "MQ",
				"id": "474"
			},
			{
				"name": "Mauritania",
				"alphaTwo": "MR",
				"id": "478"
			},
			{
				"name": "Mauritius",
				"alphaTwo": "MU",
				"id": "480"
			},
			{
				"name": "Mayotte",
				"alphaTwo": "YT",
				"id": "175"
			},
			{
				"name": "Mexico",
				"alphaTwo": "MX",
				"id": "484"
			},
			{
				"name": "Micronesia (Federated States of)",
				"alphaTwo": "FM",
				"id": "583"
			},
			{
				"name": "Moldova (Republic of)",
				"alphaTwo": "MD",
				"id": "498"
			},
			{
				"name": "Monaco",
				"alphaTwo": "MC",
				"id": "492"
			},
			{
				"name": "Mongolia",
				"alphaTwo": "MN",
				"id": "496"
			},
			{
				"name": "Montenegro",
				"alphaTwo": "ME",
				"id": "499"
			},
			{
				"name": "Montserrat",
				"alphaTwo": "MS",
				"id": "500"
			},
			{
				"name": "Morocco",
				"alphaTwo": "MA",
				"id": "504"
			},
			{
				"name": "Mozambique",
				"alphaTwo": "MZ",
				"id": "508"
			},
			{
				"name": "Myanmar",
				"alphaTwo": "MM",
				"id": "104"
			},
			{
				"name": "Namibia",
				"alphaTwo": "NA",
				"id": "516"
			},
			{
				"name": "Nauru",
				"alphaTwo": "NR",
				"id": "520"
			},
			{
				"name": "Nepal",
				"alphaTwo": "NP",
				"id": "524"
			},
			{
				"name": "Netherlands",
				"alphaTwo": "NL",
				"id": "528"
			},
			{
				"name": "New Caledonia",
				"alphaTwo": "NC",
				"id": "540"
			},
			{
				"name": "New Zealand",
				"alphaTwo": "NZ",
				"id": "554"
			},
			{
				"name": "Nicaragua",
				"alphaTwo": "NI",
				"id": "558"
			},
			{
				"name": "Niger",
				"alphaTwo": "NE",
				"id": "562"
			},
			{
				"name": "Nigeria",
				"alphaTwo": "NG",
				"id": "566"
			},
			{
				"name": "Niue",
				"alphaTwo": "NU",
				"id": "570"
			},
			{
				"name": "Norfolk Island",
				"alphaTwo": "NF",
				"id": "574"
			},
			{
				"name": "Northern Mariana Islands",
				"alphaTwo": "MP",
				"id": "580"
			},
			{
				"name": "Norway",
				"alphaTwo": "NO",
				"id": "578"
			},
			{
				"name": "Oman",
				"alphaTwo": "OM",
				"id": "512"
			},
			{
				"name": "Pakistan",
				"alphaTwo": "PK",
				"id": "586"
			},
			{
				"name": "Palau",
				"alphaTwo": "PW",
				"id": "585"
			},
			{
				"name": "Palestine, State of",
				"alphaTwo": "PS",
				"id": "275"
			},
			{
				"name": "Panama",
				"alphaTwo": "PA",
				"id": "591"
			},
			{
				"name": "Papua New Guinea",
				"alphaTwo": "PG",
				"id": "598"
			},
			{
				"name": "Paraguay",
				"alphaTwo": "PY",
				"id": "600"
			},
			{
				"name": "Peru",
				"alphaTwo": "PE",
				"id": "604"
			},
			{
				"name": "Philippines",
				"alphaTwo": "PH",
				"id": "608"
			},
			{
				"name": "Pitcairn",
				"alphaTwo": "PN",
				"id": "612"
			},
			{
				"name": "Poland",
				"alphaTwo": "PL",
				"id": "616"
			},
			{
				"name": "Portugal",
				"alphaTwo": "PT",
				"id": "620"
			},
			{
				"name": "Puerto Rico",
				"alphaTwo": "PR",
				"id": "630"
			},
			{
				"name": "Qatar",
				"alphaTwo": "QA",
				"id": "634"
			},
			{
				"name": "Réunion",
				"alphaTwo": "RE",
				"id": "638"
			},
			{
				"name": "Romania",
				"alphaTwo": "RO",
				"id": "642"
			},
			{
				"name": "Russian Federation",
				"alphaTwo": "RU",
				"id": "643"
			},
			{
				"name": "Rwanda",
				"alphaTwo": "RW",
				"id": "646"
			},
			{
				"name": "Saint Barthélemy",
				"alphaTwo": "BL",
				"id": "652"
			},
			{
				"name": "Saint Helena, Ascension and Tristan da Cunha",
				"alphaTwo": "SH",
				"id": "654"
			},
			{
				"name": "Saint Kitts and Nevis",
				"alphaTwo": "KN",
				"id": "659"
			},
			{
				"name": "Saint Lucia",
				"alphaTwo": "LC",
				"id": "662"
			},
			{
				"name": "Saint Martin (French part)",
				"alphaTwo": "MF",
				"id": "663"
			},
			{
				"name": "Saint Pierre and Miquelon",
				"alphaTwo": "PM",
				"id": "666"
			},
			{
				"name": "Saint Vincent and the Grenadines",
				"alphaTwo": "VC",
				"id": "670"
			},
			{
				"name": "Samoa",
				"alphaTwo": "WS",
				"id": "882"
			},
			{
				"name": "San Marino",
				"alphaTwo": "SM",
				"id": "674"
			},
			{
				"name": "Sao Tome and Principe",
				"alphaTwo": "ST",
				"id": "678"
			},
			{
				"name": "Saudi Arabia",
				"alphaTwo": "SA",
				"id": "682"
			},
			{
				"name": "Senegal",
				"alphaTwo": "SN",
				"id": "686"
			},
			{
				"name": "Serbia",
				"alphaTwo": "RS",
				"id": "688"
			},
			{
				"name": "Seychelles",
				"alphaTwo": "SC",
				"id": "690"
			},
			{
				"name": "Sierra Leone",
				"alphaTwo": "SL",
				"id": "694"
			},
			{
				"name": "Singapore",
				"alphaTwo": "SG",
				"id": "702"
			},
			{
				"name": "Sint Maarten (Dutch part)",
				"alphaTwo": "SX",
				"id": "534"
			},
			{
				"name": "Slovakia",
				"alphaTwo": "SK",
				"id": "703"
			},
			{
				"name": "Slovenia",
				"alphaTwo": "SI",
				"id": "705"
			},
			{
				"name": "Solomon Islands",
				"alphaTwo": "SB",
				"id": "090"
			},
			{
				"name": "Somalia",
				"alphaTwo": "SO",
				"id": "706"
			},
			{
				"name": "South Africa",
				"alphaTwo": "ZA",
				"id": "710"
			},
			{
				"name": "South Georgia and the South Sandwich Islands",
				"alphaTwo": "GS",
				"id": "239"
			},
			{
				"name": "South Sudan",
				"alphaTwo": "SS",
				"id": "728"
			},
			{
				"name": "Spain",
				"alphaTwo": "ES",
				"id": "724"
			},
			{
				"name": "Sri Lanka",
				"alphaTwo": "LK",
				"id": "144"
			},
			{
				"name": "Sudan",
				"alphaTwo": "SD",
				"id": "729"
			},
			{
				"name": "Suriname",
				"alphaTwo": "SR",
				"id": "740"
			},
			{
				"name": "Svalbard and Jan Mayen",
				"alphaTwo": "SJ",
				"id": "744"
			},
			{
				"name": "Swaziland",
				"alphaTwo": "SZ",
				"id": "748"
			},
			{
				"name": "Sweden",
				"alphaTwo": "SE",
				"id": "752"
			},
			{
				"name": "Switzerland",
				"alphaTwo": "CH",
				"id": "756"
			},
			{
				"name": "Syrian Arab Republic",
				"alphaTwo": "SY",
				"id": "760"
			},
			{
				"name": "Taiwan, Province of China",
				"alphaTwo": "TW",
				"id": "158"
			},
			{
				"name": "Tajikistan",
				"alphaTwo": "TJ",
				"id": "762"
			},
			{
				"name": "Tanzania, United Republic of",
				"alphaTwo": "TZ",
				"id": "834"
			},
			{
				"name": "Thailand",
				"alphaTwo": "TH",
				"id": "764"
			},
			{
				"name": "Timor-Leste",
				"alphaTwo": "TL",
				"id": "626"
			},
			{
				"name": "Togo",
				"alphaTwo": "TG",
				"id": "768"
			},
			{
				"name": "Tokelau",
				"alphaTwo": "TK",
				"id": "772"
			},
			{
				"name": "Tonga",
				"alphaTwo": "TO",
				"id": "776"
			},
			{
				"name": "Trinidad and Tobago",
				"alphaTwo": "TT",
				"id": "780"
			},
			{
				"name": "Tunisia",
				"alphaTwo": "TN",
				"id": "788"
			},
			{
				"name": "Turkey",
				"alphaTwo": "TR",
				"id": "792"
			},
			{
				"name": "Turkmenistan",
				"alphaTwo": "TM",
				"id": "795"
			},
			{
				"name": "Turks and Caicos Islands",
				"alphaTwo": "TC",
				"id": "796"
			},
			{
				"name": "Tuvalu",
				"alphaTwo": "TV",
				"id": "798"
			},
			{
				"name": "Uganda",
				"alphaTwo": "UG",
				"id": "800"
			},
			{
				"name": "Ukraine",
				"alphaTwo": "UA",
				"id": "804"
			},
			{
				"name": "United Arab Emirates",
				"alphaTwo": "AE",
				"id": "784"
			},
			{
				"name": "United Kingdom of Great Britain and Northern Ireland",
				"alphaTwo": "GB",
				"id": "826"
			},
			{
				"name": "United States of America",
				"alphaTwo": "US",
				"id": "840"
			},
			{
				"name": "United States Minor Outlying Islands",
				"alphaTwo": "UM",
				"id": "581"
			},
			{
				"name": "Uruguay",
				"alphaTwo": "UY",
				"id": "858"
			},
			{
				"name": "Uzbekistan",
				"alphaTwo": "UZ",
				"id": "860"
			},
			{
				"name": "Vanuatu",
				"alphaTwo": "VU",
				"id": "548"
			},
			{
				"name": "Venezuela (Bolivarian Republic of)",
				"alphaTwo": "VE",
				"id": "862"
			},
			{
				"name": "Viet Nam",
				"alphaTwo": "VN",
				"id": "704"
			},
			{
				"name": "Virgin Islands (British)",
				"alphaTwo": "VG",
				"id": "092"
			},
			{
				"name": "Virgin Islands (U.S.)",
				"alphaTwo": "VI",
				"id": "850"
			},
			{
				"name": "Wallis and Futuna",
				"alphaTwo": "WF",
				"id": "876"
			},
			{
				"name": "Western Sahara",
				"alphaTwo": "EH",
				"id": "732"
			},
			{
				"name": "Yemen",
				"alphaTwo": "YE",
				"id": "887"
			},
			{
				"name": "Zambia",
				"alphaTwo": "ZM",
				"id": "894"
			},
			{
				"name": "Zimbabwe",
				"alphaTwo": "ZW",
				"id": "716"
			}
		];
	}



	render() {
	this.state.currectFlag = this.state.flags.splice(Math.floor(Math.random() * (this.state.flags.length - 1)), 1)[0];
		return (
			<div className="Game container">
			Main Game Component
				<Flag link={this.state.currectFlag.alphaTwo.toLowerCase()} dummy={'../../../assets/flags/png/ad.png'}/>
				<div className="row">
				<Answers/>
				<Score/>
				</div>
			</div>
		);
	}
}

export default Game;
