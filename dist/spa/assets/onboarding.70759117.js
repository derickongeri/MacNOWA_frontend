import{bE as T,r as s,o as V,c as G,w as P,aI as r,a6 as m,a7 as a,Q as l,j as i,d6 as c,F as L,aO as R,dc as S,a4 as I,a5 as f,bF as U,d5 as q}from"./index.8f98e293.js";import{Q as M}from"./QSelect.3ed6c584.js";import{u as z}from"./useNotify.f3a81787.js";import"./format.69cc4860.js";import"./selection.164a0fe9.js";const x=[{sector:"Government",roles:["Maritime Authority","Marine Protection/Park Management","Law Enforcement","Legislature/Parliament","Ministry/National Agency"]},{sector:"Donor Institution/Agency",roles:["Director/Executive","Project/Program Manager","Researcher","Monitoring/Evaluation","GIS/Technical Specialist","Field/Country Staff"]},{sector:"Local NGO (national or subnational)",roles:["Director/Executive","Project/Program Manager","Monitoring/Evaluation Specialist","GIS/Technical Specialist","Field Staff","Communications Specialist","Park/Forest Ranger"]},{sector:"International NGO",roles:["Director/Executive","Project/Program Manager","Monitoring/Evaluation Specialist","GIS/Technical Specialist","Field Staff","Communications Specialist","Park/Forest Ranger"]},{sector:"UN or International Organization",roles:["Director/Executive","Project/Program Manager","Researcher","Field/Country Staff","Monitoring/Evaluation Specialist","GIS/Technical Specialist","Communications Specialist"]},{sector:"Academic/Research Organization",roles:["Faculty (Primary/Secondary)","Faculty (University)","Student (Primary/Secondary)","Student (University/Graduate)","Researcher (Post-Doc, Fellow, etc.)"]},{sector:"Journalist/Media Organization",roles:["Reporter","Editor"]},{sector:"Indigenous or Community-Based Organization",roles:["Community Leader","Communications Specialist"]},{sector:"Private Sector",roles:["Marine Engineer","Marine Biologist","Shipping and Logistics Manager","Land or Concession Owner"]},{sector:"Individual/No Affiliation",roles:[]}],F=[{name:"Afghanistan",code:"AF"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"Andorra",code:"AD"},{name:"Angola",code:"AO"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Brazil",code:"BR"},{name:"Brunei",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cabo Verde",code:"CV"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo (Congo-Brazzaville)",code:"CG"},{name:"Congo (Congo-Kinshasa)",code:"CD"},{name:"Costa Rica",code:"CR"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czechia",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Eswatini",code:"SZ"},{name:"Ethiopia",code:"ET"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Greece",code:"GR"},{name:"Grenada",code:"GD"},{name:"Guatemala",code:"GT"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Honduras",code:"HN"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Laos",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mexico",code:"MX"},{name:"Micronesia",code:"FM"},{name:"Moldova",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montenegro",code:"ME"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"North Macedonia",code:"MK"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Qatar",code:"QA"},{name:"Romania",code:"RO"},{name:"Russia",code:"RU"},{name:"Rwanda",code:"RW"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia",code:"RS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Korea",code:"KR"},{name:"South Sudan",code:"SS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syria",code:"SY"},{name:"Taiwan",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Vatican City",code:"VA"},{name:"Venezuela",code:"VE"},{name:"Vietnam",code:"VN"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}];var u={sectors:x,countries:F};const D={id:"onboarding",style:{"min-width":"100vw","min-height":"100vh"}},O=a("div",{class:"q-pa-md"},null,-1),k={class:"q-pa-md bg-white onboarding-card",style:{position:"relative",margin:"auto"}},K={class:"column items-center"},Z=a("div",{class:"row q-ma-md text-h4 text-left text-primary",style:{"font-weight":"400",width:"80%"}}," Profile Infromation ",-1),H=a("div",{class:"row text-left q-ma-md",style:{"font-weight":"400",width:"80%"}}," We use this information to make MarCNoWA geoportal more useful for you. Your privacy is important to us and we'll never share your personal information without your consent. ",-1),Y={style:{"min-width":"25vw"},class:"q-pt-lg q-mx-md"},J={style:{"font-weight":"700","font-size":"0.85em"},class:"text-left text-grey-9"},W={class:"row q-gutter-md q-pa-xs q-mb-md"},j={class:"col-8"},Q={style:{"font-weight":"700","font-size":"0.85em"},class:"text-left text-grey-9"},$={class:"row q-gutter-md q-pa-xs q-mb-md"},X={class:"col-8"},ee={style:{"font-weight":"700","font-size":"0.85em"},class:"text-left text-grey-9"},ae={class:"row q-gutter-md q-pa-xs q-mb-md",style:{"min-width":"25vw"}},oe={class:"col-8"},ne={style:{"font-weight":"700","font-size":"0.85em"},class:"text-left text-grey-9"},te={class:"row q-pa-xs q-mb-md",style:{"min-width":"25vw"}},ie={class:"col-8"},se={key:0,class:"q-px-lg"},de=a("div",null,"Role*",-1),le={style:{"font-weight":"700","font-size":"0.85em"},class:"text-left text-grey-9"},re={class:"row q-pa-xs q-mb-md",style:{"min-width":"25vw"}},ce={class:"col-8"},me={style:{"font-weight":"700","font-size":"0.85em"},class:"text-left text-grey-9"},ue={class:"row q-pa-xs q-mb-md",style:{"min-width":"25vw"}},ge={class:"col-8"},ve={class:"row justify-center q-px-xl q-my-md"},he=a("div",{class:"col"},null,-1),ye={class:"col-4"},we={__name:"onboarding",setup(pe){const N=T(),{supabase:g}=q(),{notifyError:v,notifySuccess:C}=z();s("");const e=s({email:"",firstName:"",lastName:"",Country:"",organization:"",role:"",sector:""}),h=s([]),y=s([]),d=s(null),w=s(null);function b(n){return n.sectors.map(t=>t.sector)}const A=n=>n.countries.map(t=>t.name),B=async()=>{const{data:n,error:t}=await g.auth.getSession();return t?(console.error("Error fetching user data:",t.message),null):(console.log(n.session.user),e.value.firstName=n.session.user.user_metadata.firstName,e.value.lastName=n.session.user.user_metadata.lastName,e.value.email=n.session.user.email,n.session.user)};V(()=>{h.value=b(u),y.value=A(u),B()}),G(()=>e.value.password&&e.value.password.length>0);const E=async()=>{if(e.value.email&&e.value.Country)try{const{data:n,error:t}=await g.from("user_analytics").insert([{email:e.value.email,firstName:e.value.firstName,lastName:e.value.lastName,country:e.value.Country,organization:e.value.organization,role:e.value.role,sector:e.value.sector}]);C("User Profile Created"),N.push({name:"home"})}catch(n){v(n.message)}else v("Please fill in the required fields")};s(!1),s(!0),P(e.value.sector,()=>{d.value=u.sectors.find(n=>n.sector===e.value.sector),console.log(d)});const p=()=>{d.value=u.sectors.find(n=>n.sector===e.value.sector),console.log(d),w.value=null};return(n,t)=>(r(),m("div",D,[O,a("div",k,[a("div",K,[Z,H,a("div",Y,[a("div",J,l(n.$t("FIRST NAME")),1),a("div",W,[a("div",j,[i(c,{class:"q-px-none full-width",modelValue:e.value.firstName,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value.firstName=o),color:"grey-1","bg-color":"grey-1",type:"email",placeholder:"Firstname",readonly:""},null,8,["modelValue"])])]),a("div",Q,l(n.$t("LAST NAME/ SURNAME")),1),a("div",$,[a("div",X,[i(c,{class:"q-px-none full-width",modelValue:e.value.lastName,"onUpdate:modelValue":t[1]||(t[1]=o=>e.value.lastName=o),color:"grey-1","bg-color":"grey-1",type:"email",placeholder:"Lastname",readonly:""},null,8,["modelValue"])])]),a("div",ee,l(n.$t("EMAIL")),1),a("div",ae,[a("div",oe,[i(c,{class:"q-px-none full-width",modelValue:e.value.email,"onUpdate:modelValue":t[2]||(t[2]=o=>e.value.email=o),color:"grey-1","bg-color":"grey-1",type:"email",placeholder:"example@mail.com*",readonly:""},null,8,["modelValue"])])]),a("div",ne,l(n.$t("SECTOR")),1),a("div",te,[a("div",ie,[a("div",null,[i(M,{dense:"",modelValue:e.value.sector,"onUpdate:modelValue":[t[3]||(t[3]=o=>e.value.sector=o),p],options:h.value,"emit-value":"","map-options":"","lazy-rules":"",rules:[o=>o&&o.length>0||"Field is required *"]},null,8,["modelValue","options","rules"])]),d.value?(r(),m("div",se,[de,(r(!0),m(L,null,R(d.value.roles,o=>(r(),m("div",{key:o},[i(S,{modelValue:e.value.role,"onUpdate:modelValue":_=>e.value.role=_,label:o,val:o},null,8,["modelValue","onUpdate:modelValue","label","val"])]))),128)),i(S,{modelValue:e.value.role,"onUpdate:modelValue":t[4]||(t[4]=o=>e.value.role=o),val:"Other",label:"Other"},null,8,["modelValue"]),e.value.role==="Other"?(r(),I(c,{key:0,dense:"",modelValue:e.value.otherRoles,"onUpdate:modelValue":t[5]||(t[5]=o=>e.value.otherRoles=o),label:"Describe your role/work"},null,8,["modelValue"])):f("",!0)])):f("",!0)])]),a("div",le,l(n.$t("COMPANY / ORGANIZATION")),1),a("div",re,[a("div",ce,[a("div",null,[i(c,{dense:"",modelValue:e.value.organization,"onUpdate:modelValue":t[6]||(t[6]=o=>e.value.organization=o),label:"Company / Organization / Agency Name","lazy-rules":"",rules:[o=>o&&o.length>0||"Field is required *"]},null,8,["modelValue","rules"])])])]),a("div",me,l(n.$t("COUNTRY")),1),a("div",ue,[a("div",ge,[a("div",null,[i(M,{dense:"",modelValue:e.value.Country,"onUpdate:modelValue":[t[7]||(t[7]=o=>e.value.Country=o),p],options:y.value,"emit-value":"","map-options":"","lazy-rules":"",rules:[o=>o&&o.length>0||"Field is required *"]},null,8,["modelValue","options","rules"])])])])])]),a("div",ve,[he,a("div",ye,[i(U,{class:"full-width text-h6",rounded:"",dense:"","no-caps":"",unelevated:"",color:"primary",label:n.$t("Save"),onClick:E},null,8,["label"])])])])]))}};export{we as default};
