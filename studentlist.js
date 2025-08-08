const masterList = [
    {"name": "Henry", "house": "Red", "birthdate": "2009-09-10"},
    {"name": "Chris", "house": "Green", "birthdate": "2007-03-24"},
    {"name": "Kevin", "house": "Red", "birthdate": "2007-06-29"},
    {"name": "Lucy", "house": "Blue", "birthdate": "2008-05-16"},
    {"name": "Johnny", "house": "Red", "birthdate": "2007-11-14"},
    {"name": "Daniel", "house": "Blue", "birthdate": "2009-09-04"},
    {"name": "Stephen", "house": "Blue", "birthdate": "2008-09-30"},
    {"name": "Tiger", "house": "Green", "birthdate": "2009-03-23"},
    {"name": "Agu", "house": "Yellow", "birthdate": "2008-11-01"},
    {"name": "Michael", "house": "Blue", "birthdate": "2008-12-25"},
    {"name": "Ethan", "house": "Yellow", "birthdate": "2009-06-19"},
    {"name": "Shine", "house": "Blue", "birthdate": "2013-02-14"},  
    {"name": "Owen", "house": "Green", "birthdate": "2012-11-30"},
    {"name": "Francis", "house": "Blue", "birthdate": "2013-01-31"},
    {"name": "Mianmian", "house": "Red", "birthdate": "2013-03-01"},
    {"name": "Grace N", "house": "Yellow", "birthdate": "2013-03-09"},
    {"name": "Rene", "house": "Red", "birthdate": "2013-03-28"},
    {"name": "Steve", "house": "Green", "birthdate": "2012-09-09"},
    {"name": "Aurora", "house": "Yellow", "birthdate": "2013-02-27"},
    {"name": "Anne", "house": "Green", "birthdate": "2011-06-13"},
    {"name": "Sophie", "house": "Blue", "birthdate": "2012-05-14"},
    {"name": "June", "house": "Blue", "birthdate": "2011-06-18"},
    {"name": "Leo", "house": "Blue", "birthdate": "2011-07-06"},
    {"name": "Jay", "house": "Blue", "birthdate": "2012-09-19"},
    {"name": "Steven", "house": "Red", "birthdate": "2010-06-24"},
    {"name": "Calvin Y", "house": "Yellow", "birthdate": "2009-08-17"},
    {"name": "Luna", "house": "Red", "birthdate": "2009-07-08"},
    {"name": "Calvin Z", "house": "Blue", "birthdate": "2010-04-21"},
    {"name": "Angelina", "house": "Blue", "birthdate": "2009-01-15"},
    {"name": "Ben", "house": "Yellow", "birthdate": "2007-12-17"},
    {"name": "Stuart", "house": "Yellow", "birthdate": "2007-12-17"},
    {"name": "Diego", "house": "Blue", "birthdate": "2008-07-09"},
    {"name": "Vincent", "house": "Red", "birthdate": "2007-12-29"},
    {"name": "Howard", "house": "Blue", "birthdate": "2008-05-09"},
    {"name": "Kevin", "house": "Red", "birthdate": "2007-06-29"},
    {"name": "Angelina", "house": "Blue", "birthdate": "2009-01-15"},
    {"name": "Emily", "house": "", "birthdate": ""},
    {"name": "Jim", "house": "", "birthdate": ""},
    {"name": "Jennifer", "house": "", "birthdate": ""},
    {"name": "Jack", "house": "", "birthdate": ""},
    {"name": "Jacky", "house": "", "birthdate": ""},
    {"name": "Nancy", "house": "", "birthdate": ""},
    {"name": "Jagger", "house": "", "birthdate": ""},
    {"name": "Grace X", "house": "", "birthdate": ""},
    {"name": "Oscar", "house": "", "birthdate": ""},
    {"name": "Matthew", "house": "", "birthdate": ""},
    {"name": "Stella", "house": "", "birthdate": ""},
    {"name": "Grant", "house": "", "birthdate": ""},
    {"name": "Catherine", "house": "", "birthdate": ""},
    {"name": "Tyler", "house": "", "birthdate": ""},
    {"name": "Lee", "house": "", "birthdate": ""},
    {"name": "Zachary", "house": "", "birthdate": ""},
    {"name": "Kyla", "house": "", "birthdate": ""},
    {"name": "Celine", "house": "", "birthdate": ""},
    {"name": "Grace W", "house": "", "birthdate": ""},
    {"name": "Rebecca", "house": "", "birthdate": ""},
    {"name": "Jacob", "house": "", "birthdate": ""},
    {"name": "Elon", "house": "", "birthdate": ""},
    {"name": "Genevieve", "house": "", "birthdate": ""},
    {"name": "Jerry", "house": "", "birthdate": ""},
    {"name": "Detong", "house": "", "birthdate": ""},
    {"name": "Howen", "house": "", "birthdate": ""},
    {"name": "Angel", "house": "", "birthdate": ""},
    {"name": "Hannah", "house": "Red", "birthdate": ""},
    {"name": "Sophie", "house": "", "birthdate": ""},
    {"name": "Chloe", "house": "", "birthdate": ""},
    {"name": "Harry", "house": "", "birthdate": ""},
    {"name": "Vlan", "house": "", "birthdate": ""},
    {"name": "Yolanda", "house": "", "birthdate": ""},
    {"name": "Kimi", "house": "", "birthdate": ""},
    {"name": "Tommy", "house": "", "birthdate": ""},
    {"name": "Jennie", "house": "", "birthdate": ""},
    {"name": "Shaye", "house": "", "birthdate": ""},
    {"name": "Ellie", "house": "", "birthdate": ""},
    {"name": "Alfred", "house": "", "birthdate": ""},
    {"name": "Vicky", "house": "", "birthdate": ""},
];

const productionTechStudents = [
    'Diego', 'Genevieve', 'Vincent', 'Jerry', 'Detong', 'Howard', 'Kevin', 'Howen', 'Angelina', 'Angel', 'Hannah', 'Sophie', 'Chloe', 'Harry', 'Vlan', 'Yolanda', 'Kimi', 'Tommy', 'Jennie', 'Shaye', 'Ellie', 'Alfred', 'Vicky'
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

const productionTechTeacherModeOrder = ['Diego', 'Genevieve', 'Vincent', 'Jerry', 'Detong', 'Howard', 'Kevin', 'Howen', 'Angelina', 'Angel', 'Hannah', 'Sophie', 'Chloe', 'Harry', 'Vlan', 'Yolanda', 'Kimi', 'Tommy', 'Jennie', 'Shaye', 'Ellie', 'Alfred', 'Vicky'];

const msBandStudents = [
    'Jacky', 'Nancy', 'Jagger', 'Grace X', 'Oscar', 'Matthew', 'Stella', 'Grant', 'Catherine', 'Tyler', 'Lee', 'Zachary', 'Kyla', 'Celine', 'Grace W', 'Anne', 'Rebecca', 'Sophie', 'Jacob', 'June', 'Owen', 'Mianmian', 'Grace N', 'Aurora', 'Rene', 'Shine', 'Francis', 'Elon'
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

const msBandTeacherModeOrder = ['Jacky', 'Nancy', 'Jagger', 'Grace X', 'Oscar', 'Matthew', 'Stella', 'Grant', 'Catherine', 'Tyler', 'Lee', 'Zachary', 'Kyla', 'Celine', 'Grace W', 'Anne', 'Rebecca', 'Sophie', 'Jacob', 'June', 'Owen', 'Mianmian', 'Grace N', 'Aurora', 'Rene', 'Shine', 'Francis', 'Elon'];

const msBandThursdayStudents = [
    'Tyler', 'Lee', 'Zachary', 'Kyla', 'Celine', 'Grace W', 'Anne', 'Rebecca', 'Sophie', 'Jacob', 'June', 'Owen', 'Mianmian', 'Grace N', 'Aurora', 'Rene', 'Shine', 'Francis', 'Elon'
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

const msBandThursdayTeacherModeOrder = ['Tyler', 'Lee', 'Zachary', 'Kyla', 'Celine', 'Grace W', 'Anne', 'Rebecca', 'Sophie', 'Jacob', 'June', 'Owen', 'Mianmian', 'Grace N', 'Aurora', 'Rene', 'Shine', 'Francis', 'Elon'];

const hsBandStudents = [
    'Henry','Emily','Ethan','Tiger','Jim','Luna','Steven','Jennifer','Calvin Y','Leo','Calvin Z','Jack'
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

const hsBandTeacherModeOrder = ['Henry','Emily','Ethan','Tiger','Jim','Luna','Steven','Jennifer','Calvin Y','Leo','Calvin Z','Jack'];