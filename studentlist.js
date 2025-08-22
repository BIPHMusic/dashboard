const masterList = [
    //Production Tech
    {"name": "Fiona", "house": "Red", "birthdate": ""},
    {"name": "Jimmy", "house": "Yellow", "birthdate": ""},
    {"name": "Kevin", "house": "Red", "birthdate": "2007-06-29"},
    {"name": "Howard", "house": "Blue", "birthdate": "2008-05-09"},
    {"name": "Vlan", "house": "Green", "birthdate": ""},
    {"name": "Jennie", "house": "Red", "birthdate": ""},
    {"name": "Zoe", "house": "Green", "birthdate": ""},
    {"name": "Voorhis", "house": "Yellow", "birthdate": ""},
    {"name": "Kiki", "house": "Red", "birthdate": ""},
    {"name": "Yolanda", "house": "Red", "birthdate": ""},
    {"name": "Stella", "house": "Green", "birthdate": ""},
    {"name": "Angel", "house": "Yellow", "birthdate": ""},
    {"name": "Vincent", "house": "Red", "birthdate": "2007-12-29"},
    {"name": "Edward", "house": "Yellow", "birthdate": ""},
    {"name": "Diego", "house": "Blue", "birthdate": "2008-07-09"},
    {"name": "Chloe", "house": "Blue", "birthdate": ""},
    {"name": "Jerry", "house": "Red", "birthdate": ""},
    {"name": "Alfred", "house": "Green", "birthdate": ""},
    {"name": "Angelina", "house": "Blue", "birthdate": "2009-01-15"},
    {"name": "Howen", "house": "Blue", "birthdate": ""},
    {"name": "Tommy", "house": "Green", "birthdate": ""},
    {"name": "Shawn", "house": "Blue", "birthdate": ""},
    {"name": "Isaac", "house": "Blue", "birthdate": ""},
    {"name": "Hannah", "house": "Red", "birthdate": ""},
    {"name": "Thomas", "house": "Yellow", "birthdate": ""},

    //MS Band
    {"name": "Jacky", "house": "Green", "birthdate": ""},
    {"name": "Oscar", "house": "Red", "birthdate": ""},
    {"name": "Matthew", "house": "Yellow", "birthdate": ""},
    {"name": "Nancy", "house": "Yellow", "birthdate": ""},
    {"name": "Grace X", "house": "Red", "birthdate": ""},
    {"name": "Stella Y", "house": "Yellow", "birthdate": ""},
    {"name": "Grant", "house": "Green", "birthdate": ""},
    {"name": "Catherine", "house": "Green", "birthdate": ""},
    {"name": "Anne", "house": "Green", "birthdate": "2011-06-13"},
    {"name": "Hannah", "house": "Yellow", "birthdate": ""},
    {"name": "Rebecca", "house": "Blue", "birthdate": ""},
    {"name": "Shine", "house": "Blue", "birthdate": "2013-02-14"},
    {"name": "Katerina", "house": "Red", "birthdate": ""},
    {"name": "Andy", "house": "Green", "birthdate": ""},
    {"name": "Sophie", "house": "Blue", "birthdate": "2012-05-14"},
    {"name": "Jacob", "house": "Red", "birthdate": ""},
    {"name": "Owen", "house": "Green", "birthdate": "2012-11-30"},
    {"name": "Tyler", "house": "Red", "birthdate": ""},
    {"name": "Francis", "house": "Blue", "birthdate": "2013-01-31"},
    {"name": "Mianmian", "house": "Red", "birthdate": "2013-03-01"},
    {"name": "Grace N", "house": "Yellow", "birthdate": "2013-03-09"},
    {"name": "June", "house": "Blue", "birthdate": "2011-06-18"},
    {"name": "Stella S", "house": "Green", "birthdate": ""},
    {"name": "Kyla", "house": "Red", "birthdate": ""},
    {"name": "Celine", "house": "Blue", "birthdate": ""},
    {"name": "Rene", "house": "Red", "birthdate": "2013-03-28"},
    {"name": "Austen", "house": "Yellow", "birthdate": ""},
    {"name": "Zachary", "house": "Green", "birthdate": ""},
    {"name": "Aurora", "house": "Yellow", "birthdate": "2013-02-27"},

    //HS Band
    {"name": "Tiger", "house": "Green", "birthdate": "2009-03-23"},
    {"name": "Leo", "house": "Blue", "birthdate": "2011-07-06"},
    {"name": "Steven", "house": "Red", "birthdate": "2010-06-24"},
    {"name": "Jennifer", "house": "Yellow", "birthdate": ""},
    {"name": "Henry", "house": "Red", "birthdate": "2009-09-10"},
    {"name": "Ethan", "house": "Yellow", "birthdate": "2009-06-19"},
    {"name": "Calvin Y", "house": "Yellow", "birthdate": "2009-08-17"},
    {"name": "Luna", "house": "Red", "birthdate": "2009-07-08"},
    {"name": "Calvin Z", "house": "Blue", "birthdate": "2010-04-21"},
    {"name": "Jim", "house": "Yellow", "birthdate": ""},

    //all others
    {"name": "Chris", "house": "Green", "birthdate": "2007-03-24"},
    {"name": "Lucy", "house": "Blue", "birthdate": "2008-05-16"},
    {"name": "Johnny", "house": "Red", "birthdate": "2007-11-14"},
    {"name": "Daniel", "house": "Blue", "birthdate": "2009-09-04"},
    {"name": "Agu", "house": "Yellow", "birthdate": "2008-11-01"},
    {"name": "Michael", "house": "Blue", "birthdate": "2008-12-25"},
    {"name": "Steve", "house": "Green", "birthdate": "2012-09-09"},
    {"name": "Ben", "house": "Yellow", "birthdate": "2007-12-17"},
    {"name": "Stuart", "house": "Yellow", "birthdate": "2007-12-17"},
];

const productionTechStudents = [
    'Fiona', 'Jimmy', 'Kevin', 'Howard', 'Vlan', 'Jennie', 'Zoe', 'Voorhis', 'Kiki', 'Yolanda', 'Stella', 'Angel', 'Vincent', 'Edward', 'Diego', 'Chloe', 'Jerry', 'Alfred', 'Angelina', 'Howen', 'Tommy', 'Shawn', 'Isaac', 'Hannah', 'Thomas'
].map(name => {
    const studentInfo = masterList.find(s => s.name === name);
    return {
        name,
        birthdate: studentInfo ? studentInfo.birthdate : null,
        score: 'EX',
        attendance: 'Absent',
        stands: false,
        ipads: false,
        returned: false,
        engagement: false,
        housePoints: 0
    };
});

const productionTechTeacherModeOrder = ['Fiona', 'Jimmy', 'Kevin', 'Howard', 'Vlan', 'Jennie', 'Zoe', 'Voorhis', 'Kiki', 'Yolanda', 'Stella', 'Angel', 'Vincent', 'Edward', 'Diego', 'Chloe', 'Jerry', 'Alfred', 'Angelina', 'Howen', 'Tommy', 'Shawn', 'Isaac', 'Hannah', 'Thomas'];

const msBandStudents = [
    'Jacky', 'Oscar', 'Matthew', 'Nancy', 'Grace X', 'Stella Y', 'Grant', 'Catherine', 'Anne', 'Hannah', 'Rebecca', 'Shine', 'Katerina', 'Andy', 'Sophie', 'Jacob', 'Owen', 'Tyler', 'Francis', 'Mianmian', 'Grace N', 'June', 'Stella S', 'Kyla', 'Celine', 'Rene', 'Austen', 'Zachary', 'Aurora'
].map(name => {
    const studentInfo = masterList.find(s => s.name === name);
    return {
        name,
        birthdate: studentInfo ? studentInfo.birthdate : null,
        score: 'EX',
        attendance: 'Absent',
        stands: false,
        ipads: false,
        returned: false,
        engagement: false,
        housePoints: 0
    };
});

const msBandTeacherModeOrder = ['Shine', 'Celine', 'Rebecca', 'Grant', 'Andy', 'Grace X', 'Oscar', 'Matthew', 'Nancy', 'Austen', 'Stella S', 'Katerina', 'Kyla', 'Mianmian', 'June', 'Stella Y', 'Grace N', 'Anne', 'Tyler', 'Francis', 'Owen', 'Zachary', 'Sophie', 'Jacob', 'Jacky', 'Rene', 'Catherine', 'Hannah', 'Aurora'];

const msBandThursdayStudents = [
    'Andy', 'June', 'Grace W', 'Anne', 'Katerina', 'Celine', 'Sophie', 'Tyler', 'Owen', 'Mianmian', 'Austen', 'Francis', 'Grace N', 'Stella S', 'Zachary', 'Kyla', 'Rene', 'Aurora', 'Hannah', 'Rebecca', 'Shine', 'Jacob'
].map(name => {
    const studentInfo = masterList.find(s => s.name === name);
    return {
        name,
        birthdate: studentInfo ? studentInfo.birthdate : null,
        score: 'EX',
        attendance: 'Absent',
        stands: false,
        ipads: false,
        returned: false,
        engagement: false,
        housePoints: 0
    };
});

const msBandThursdayTeacherModeOrder = ['Shine', 'Celine', 'Rebecca', 'Andy', 'Grace W', 'Austen', 'Stella S', 'Katerina', 'Kyla', 'Mianmian', 'June', 'Grace N', 'Anne', 'Tyler', 'Francis', 'Owen', 'Zachary', 'Sophie', 'Jacob', 'Rene', 'Hannah', 'Aurora'];

const hsBandStudents = [
    'Henry','Ethan','Tiger','Jim','Luna','Steven','Jennifer','Calvin Y','Leo','Calvin Z'
].map(name => {
    const studentInfo = masterList.find(s => s.name === name);
    return {
        name,
        birthdate: studentInfo ? studentInfo.birthdate : null,
        score: 'EX',
        attendance: 'Absent',
        stands: false,
        ipads: false,
        returned: false,
        engagement: false,
        housePoints: 0
    };
});

const hsBandTeacherModeOrder = ['Henry','Ethan','Tiger','Jim','Luna','Steven','Jennifer','Calvin Y','Leo','Calvin Z'];