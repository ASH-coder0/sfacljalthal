"use client";

import TeamMemberCard, { teamMemberType } from "@/components/TeamMemberCard";
import { getAllTeamMembers } from "@/redux/slices/teamSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MembersPage = () => {

  const dispatch = useDispatch();

  const { teamMembers } = useSelector(state => state.team);

  const [memberType, setMemberType] = useState(teamMemberType.EXECUTIVE);
  const [members, setTeamMembers] = useState([]);

  useEffect(() => {
    dispatch(getAllTeamMembers());
  }, []);

  const handleTeamMemberTypeChange = (memberType) => {

    if (memberType == teamMemberType.EXECUTIVE) {
      const executiveMembers = teamMembers.filter(member => member.type === "executive");
      setMemberType(teamMemberType.EXECUTIVE);
      setTeamMembers(executiveMembers);
    } else if (memberType == teamMemberType.PAST_PRESIDENT) {
      const pastMembers = teamMembers.filter(member => member.type === "pastPresidents");
      setMemberType(teamMemberType.PAST_PRESIDENT);
      setTeamMembers(pastMembers);
      setMemberType(teamMemberType.PAST_PRESIDENT);
    } else {
      const staff = teamMembers.filter(member => member.type === "staff");
      setTeamMembers(staff);
      setMemberType(teamMemberType.STAFF);
    }
  };

  useEffect(() => {
    if (teamMembers.length !== 0) {
      handleTeamMemberTypeChange(teamMemberType.EXECUTIVE);
    }
  }, [teamMembers])

  return (
    <div className='flex flex-col'>
      <div className="flex justify-center  my-4 py-2">
        <div className="flex gap-2 md:gap-4 text-sm md:text-xl font-medium  border-2 border-background  cursor-pointer">
          <p
            onClick={() => {
              handleTeamMemberTypeChange(teamMemberType.EXECUTIVE);
            }
            }
            className={`${memberType === "executive" ? 'bg-background text-white' : "bg-white"} p-2`} >Executive Members</p>

          <p
            onClick={() => {
              handleTeamMemberTypeChange(teamMemberType.PAST_PRESIDENT);
            }}
            className={`${memberType === "pastPresidents" ? 'bg-background text-white' : "bg-white"} p-2`}>Past Presidents</p>

          <p
            onClick={() => {
              handleTeamMemberTypeChange(teamMemberType.STAFF);

            }}
            className={`${memberType === "staff" ? 'bg-background text-white' : "bg-white"} p-2`}
          >Staff</p>
        </div>
      </div>
      {members.length == 0 ?
        <div className="flex justify-center items-center h-full">
          <p className="py-40">No Members Found</p>
        </div>
        :
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-8 lg:px-20 gap-4 pb-20'>
          {members?.map((member) => (
          <TeamMemberCard cardType={teamMemberType.EXECUTIVE} key={member.id} props={member} />
          ))}
        </div>
      }
    </div>
  );
};

export default MembersPage;

// const executiveMembers = [
//   {
//     "id": "1",
//     "name": "लेखनाथ न्यौपाने",
//     "image": "/lekhnath.png",
//     "designation": "अध्यक्ष",
//     "phone": "९८५७०२९७७८",
//     "email": "lekhnath@example.com"
//   },
//   {
//     "id": "2",
//     "name": "मिनराज शर्मा",
//     "image": "/minraj.png",
//     "designation": "निवर्तमान अध्यक्ष",
//     "phone": "९८५७०८०१७७",
//     "email": "minraj@example.com"
//   },
//   {
//     "id": "3",
//     "name": "तारा प्रसाद गौतम",
//     "image": "/tara.png",
//     "designation": "वरिष्ठ उपाध्यक्ष",
//     "phone": "९८५७०८०३३८",
//     "email": "tara@example.com"
//   },
//   {
//     "id": "4",
//     "name": "टेक बहादुर बुढाथोकी",
//     "image": "/tek.png",
//     "designation": "उघोग उपाध्यक्ष",
//     "phone": "९८५७०८१५७९",
//     "email": "tek@example.com"
//   },
//   {
//     "id": "5",
//     "name": "चन्द्र बहादुर रणपाल",
//     "image": "/chandra.png",
//     "designation": "वाणिज्य उपाध्यक्ष",
//     "phone": "९८४७०४७२२१",
//     "email": "chandra@example.com"
//   },
//   {
//     "id": "6",
//     "name": "गंगा प्रसाद पाठक",
//     "image": "/ganga.png",
//     "designation": "महासचिव",
//     "phone": "९८५७०८०४५४",
//     "email": "ganga@example.com"
//   },
//   {
//     "id": "7",
//     "name": "डिल्लीराज कंडेल",
//     "image": "/dilliraj.png",
//     "designation": "सचिव",
//     "phone": "९८५७०८०८२२",
//     "email": "dilli@example.com"
//   },
//   {
//     "id": "8",
//     "name": "जित बहादुर चौधरी",
//     "image": "/jitbahadur.png",
//     "designation": "कोषाध्यक्ष",
//     "phone": "",
//     "email": "jeet@example.com"
//   },
//   {
//     "id": "9",
//     "name": "पार्वती भुसाल",
//     "image": "/parbati.png",
//     "designation": "सह कोषाध्यक्ष",
//     "phone": "९८४७२५६१२०",
//     "email": "parvati@example.com"
//   },
//   {
//     "id": "10",
//     "name": "घनश्याम पाध्या आचार्य",
//     "image": "/ghanshyam.png",
//     "designation": "सदस्य",
//     "phone": "९८५७०८१६७०",
//     "email": "ghanshyam@example.com"
//   },
//   {
//     "id": "11",
//     "name": "प्रकाश घिमीरे",
//     "image": "/prakash.png",
//     "designation": "सदस्य",
//     "phone": "९८५७०८१६७०",
//     "email": "prakash@example.com"
//   },
//   {
//     "id": "12",
//     "name": "खुमानन्द वस्याल",
//     "image": "/khuman.png",
//     "designation": "सदस्य",
//     "phone": "९८५७०८१२०९",
//     "email": "khumanand@example.com"
//   },
//   {
//     "id": "13",
//     "name": "सन्तोष श्रेष्ठ",
//     "image": "/santosh.png",
//     "designation": "सदस्य",
//     "phone": "९८४७२२४४४७",
//     "email": "santosh@example.com"
//   },
//   {
//     "id": "14",
//     "name": "रुविन तामाङ",
//     "image": "/rubin.png",
//     "designation": "सदस्य",
//     "phone": "९८०६९४३२४४",
//     "email": "ruvin@example.com"
//   },
//   {
//     "id": "15",
//     "name": "घनश्याम थारू",
//     "image": "/ghanshyam-tharu.png",
//     "designation": "सदस्य",
//     "phone": "९८६७२२८६०८",
//     "email": "ghanshyam.tharu@example.com"
//   },
//   {
//     "id": "16",
//     "name": "राजेन्द्र सुनार एशोसियट",
//     "image": "/rajendra.png",
//     "designation": "सदस्य",
//     "phone": "९८५७०८०३०५",
//     "email": "rajendra@example.com"
//   },
//   {
//     "id": "17",
//     "name": "देबिदत्त सापकोटा",
//     "image": "/devdatta.png",
//     "designation": "सदस्य",
//     "phone": "९८५७०८०८८१",
//     "email": "debidatt@example.com"
//   },
//   {
//     "id": "18",
//     "name": "दुर्गा भाट",
//     "image": "/durga.png",
//     "designation": "सदस्य",
//     "phone": "",
//     "email": "durga@example.com"
//   },
//   {
//     "id": "19",
//     "name": "मेरिना श्रेष्ठ राना",
//     "image": "/melina.png",
//     "designation": "सदस्य",
//     "phone": "९८०४४७५०१७",
//     "email": "merina@example.com"
//   },
//   {
//     "id": "20",
//     "name": "भरत कडेल",
//     "image": "/bharat.png",
//     "designation": "उप समिती संयोजक",
//     "phone": " ",
//     "email": "bharat@example.com"
//   },
//   {
//     "id": "21",
//     "name": "कमला भण्डारी",
//     "image": "/kamala.png",
//     "designation": "उप समिती संयोजक",
//     "phone": " ",
//     "email": "kamala@example.com"
//   },
//   {
//     "id": "22",
//     "name": "विष्णु प्रसाद पाण्डेय",
//     "image": "/bishnu.png",
//     "designation": "सल्लाहकार",
//     "phone": "९८५१०२४००९",
//     "email": "bishnu@example.com"
//   },
//   {
//     "id": "23",
//     "name": "धिरज शर्मा",
//     "image": "/dhiraj.png",
//     "designation": "सल्लाहकार",
//     "phone": "९८५७०२७०३६",
//     "email": "dhiraj@example.com"
//   },
//   {
//     "id": "24",
//     "name": "एकदेव पाण्डे",
//     "image": "/ekdev.png",
//     "designation": "सल्लाहकार",
//     "phone": "९८६७०३१३७०",
//     "email": "ekdev@example.com"
//   },
//   {
//     "id": "25",
//     "name": "फुल कुमारी गिरी",
//     "image": "/fulkumari.png",
//     "designation": "सिमा सल्लाहकार",
//     "phone": "९८५७०८०६९९",
//     "email": "phul@example.com"
//   },
//   {
//     "id": "26",
//     "name": "सुभाष चन्द्र जि सी",
//     "image": "/subash.png",
//     "designation": "सल्लाहकार",
//     "phone": "९८५७०८०७०५",
//     "email": "subhash@example.com"
//   },
//   {
//     "id": "27",
//     "name": "दामोदर जि सी",
//     "image": "/damodar.png",
//     "designation": "सल्लाहकार",
//     "phone": "९८४७०७००५७",
//     "email": "damodar@example.com"
//   },
//   {
//     "id": "28",
//     "name": "रमेश ज्ञवाली",
//     "image": "/ramesh.png",
//     "designation": "सल्लाहकार",
//     "phone": "९८५७०४५१६१",
//     "email": "ramesh@example.com"
//   },
//   {
//     "id": "29",
//     "name": "नबिना ज्ञवाली",
//     "image": "/nabina.png",
//     "designation": "कार्यालय सचिव",
//     "phone": " ",
//     "email": "nabina@example.com"
//   }
// ];



// const pastPresidents = [
//   {
//     id: '1',
//     name: 'Ram Prasad Pandey',
//     image: '/assets/bardhaghatcci.png',
//   },
//   {
//     id: '2',
//     name: 'Jane Smith',
//     image: '/assets/bardhaghatcci.png',
//   }, {
//     id: '3',
//     name: 'Alice Johnson',
//     image: '/assets/bardhaghatcci.png',

//   },
//   {
//     id: '4',
//     name: 'Bob Brown',
//     image: '/assets/bardhaghatcci.png',
//   },
//   {
//     id: '5',
//     name: 'Mary Wilson',
//     image: '/assets/bardhaghatcci.png',

//   },
//   {
//     id: '6',
//     name: 'David Davis',
//     image: '/assets/bardhaghatcci.png',

//   }, {
//     id: '7',
//     name: 'Emily Thompson',
//     image: '/assets/bardhaghatcci.png',

//   },
//   {
//     id: '8',
//     name: 'Michael Lee',
//     image: '/assets/bardhaghatcci.png',

//   },
//   {
//     id: '9',
//     name: 'Sarah Wilson',
//     image: '/assets/bardhaghatcci.png',

//   }, {
//     id: '10',
//     name: 'Jessica Johnson',
//     image: '/assets/bardhaghatcci.png',

//   }
// ];

// const staff = [
//   {
//     id: '1',
//     name: 'Ram Prasad Pandey',
//     image: '/assets/bardhaghatcci.png',
//     designation: 'CEO',
//     phone: '+1 123-456-7890',
//     email: 'john.doe@example.com',
//   },
//   {
//     id: '2',
//     name: 'Jane Smith',
//     image: '/assets/bardhaghatcci.png',
//     designation: 'CFO',
//     phone: '+1 987-654-3210',
//     email: 'jane.smith@example.com',
//   }, {
//     id: '3',
//     name: 'Alice Johnson',
//     image: '/assets/bardhaghatcci.png',
//     designation: 'CTO',
//     phone: '+1 789-456-1230',
//     email: 'alice.johnson@example.com',
//   },
//   {
//     id: '4',
//     name: 'Bob Brown',
//     image: '/assets/bardhaghatcci.png',
//     designation: 'Director',
//     phone: '+1 555-555-5555',
//     email: 'bob.brown@example.com',
//   }, {
//     id: '5',
//     name: 'Mary Wilson',
//     image: '/assets/bardhaghatcci.png',
//     designation: 'Senior Vice President',
//     phone: '+1 222-222-2222',
//     email: 'mary.wilson@example.com',
//   },
//   {
//     id: '6',
//     name: 'David Davis',
//     image: '/assets/bardhaghatcci.png',
//     designation: 'Marketing Manager',
//     phone: '+1 333-333-3333',
//     email: 'david.davis@example.com',
//   }, {
//     id: '7',
//     name: 'Emily Thompson',
//     image: '/assets/bardhaghatcci.png',
//     designation: 'Product Manager',
//     phone: '+1 444-444-4444',
//     email: 'emily.thompson@example.com',
//   },
//   {
//     id: '8',
//     name: 'Michael Lee',
//     image: '/assets/bardhaghatcci.png',
//     designation: 'Financial Analyst',
//     phone: '+1 555-555-5555',
//     email: 'michael.lee@example.com',
//   },
//   {
//     id: '9',
//     name: 'Sarah Wilson',
//     image: '/assets/bardhaghatcci.png',
//     designation: 'Public Relations Manager',
//     phone: '+1 666-666-6666',
//     email: 'sarah.wilson@example.com',
//   }, {
//     id: '10',
//     name: 'Jessica Johnson',
//     image: '/assets/bardhaghatcci.png',
//     designation: 'HR Manager',
//     phone: '+1 777-777-7777',
//     email: 'jessica.johnson@example.com',
//   }
// ];


// {
//   `
// लेखनाथ न्यौपाने (शर्मा) - अध्यक्ष
// मिनराज शर्मा - निवर्तमान अध्यक्ष
// तारा प्रसाद गौतम - वरिष्ठ उपाध्यक्ष
// टेक बहादुर बुढाथोकी - उघोग उपाध्यक्ष
// चन्द्र रणपाल - वाणिज्य उपाध्यक्ष
// गंगा प्रसाद पाठक - महासचिव
// डिल्लीराज कडेल - सचिव
// जित बहादुर चौधरी - कोषाध्यक्ष
// पार्वती भुसाल - सह कोषाध्यक्ष
// घनश्याम पाध्या आचार्य  - सदस्य
// प्रकाश घिमीरे  - सदस्य
// खुमानन्द वस्याल  - सदस्य
// सन्तोष श्रेष्ठ  - सदस्य
// रुविन तामाङ  - सदस्य
// घनश्याम थारू  - सदस्य
// राजेन्द्र सुनार एशोसियट  - सदस्य
// देबिदत्त सापकोटा मनोनित  - सदस्य
// दुर्गा भाट  - सदस्य
// मेरिना श्रेष्ठ राना  - सदस्य
// भरत कडेल - उप समिती संयोजक
// कमला भण्डारी - उप समिती संयोजक
// विष्णु प्रसाद पाण्डेय - सल्लाहकार
// धिरज शर्मा - वस्याल सल्लाहकार
// एकदेव पाण्डे - सल्लाहकार
// फुल कुमारी गिरी - (सिमा)सल्लाहकार
// सुभाष चन्द्र जि सी - सल्लाहकार
// दामोदर जि सी - सल्लाहकार
// रमेश ज्ञवाली - सल्लाहकार
// नबिना ज्ञवाली - कार्यालय सचिव
//   `;
// }