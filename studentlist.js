const masterList = [
    {"name": "Fiona", "house": "Red", "birthdate": ""},
    {"name": "Kevin", "house": "Red", "birthdate": "2007-06-29"},
    {"name": "Howard", "house": "Blue", "birthdate": "2008-05-09"},
    {"name": "Vlan", "house": "Green", "birthdate": ""},
    {"name": "Jennie", "house": "Red", "birthdate": ""},
    {"name": "Zoe", "house": "Green", "birthdate": ""},
    {"name": "Genevieve", "house": "Green", "birthdate": ""},
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
    {"name": "Harry", "house": "Yellow", "birthdate": ""},
    {"name": "Shawn", "house": "Blue", "birthdate": ""},
    {"name": "Hannah", "house": "Red", "birthdate": ""},
    {"name": "Thomas", "house": "Yellow", "birthdate": ""},

    {"name": "Jacky", "house": "Green", "birthdate": ""},
    {"name": "Oscar", "house": "Red", "birthdate": ""},
    {"name": "Matthew", "house": "Yellow", "birthdate": ""},
    {"name": "Nancy", "house": "Yellow", "birthdate": ""},
    {"name": "Will", "house": "Blue", "birthdate": ""},
    {"name": "Jagger", "house": "Red", "birthdate": ""},
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
    {"name": "Elon", "house": "Green", "birthdate": ""},
    {"name": "Zachary", "house": "Green", "birthdate": ""},
    {"name": "Aurora", "house": "Yellow", "birthdate": "2013-02-27"},
    {"name": "Grace W", "house": "Yellow", "birthdate": ""},

    {"name": "Henry", "house": "Red", "birthdate": "2009-09-10"},
    {"name": "Emily", "house": "Yellow", "birthdate": ""},
    {"name": "Ethan", "house": "Yellow", "birthdate": "2009-06-19"},
    {"name": "Tiger", "house": "Green", "birthdate": "2009-03-23"},
    {"name": "Jim", "house": "Yellow", "birthdate": ""},
    {"name": "Luna", "house": "Red", "birthdate": "2009-07-08"},
    {"name": "Steven", "house": "Red", "birthdate": "2010-06-24"},
    {"name": "Jennifer", "house": "Yellow", "birthdate": ""},
    {"name": "Calvin Y", "house": "Yellow", "birthdate": "2009-08-17"},
    {"name": "Leo", "house": "Blue", "birthdate": "2011-07-06"},
    {"name": "Calvin Z", "house": "Blue", "birthdate": "2010-04-21"},
    {"name": "Jack", "house": "Green", "birthdate": ""},

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
    'Fiona', 'Kevin', 'Howard', 'Vlan', 'Jennie', 'Zoe', 'Genevieve', 'Kiki', 'Yolanda', 'Stella', 'Angel', 'Vincent', 'Edward', 'Diego', 'Chloe', 'Jerry', 'Alfred', 'Angelina', 'Howen', 'Tommy', 'Harry', 'Shawn', 'Hannah', 'Thomas'
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

const productionTechTeacherModeOrder = ['Fiona', 'Kevin', 'Howard', 'Vlan', 'Jennie', 'Zoe', 'Genevieve', 'Kiki', 'Yolanda', 'Stella', 'Angel', 'Vincent', 'Edward', 'Diego', 'Chloe', 'Jerry', 'Alfred', 'Angelina', 'Howen', 'Tommy', 'Harry', 'Shawn', 'Hannah', 'Thomas'];

const msBandStudents = [
    'Jacky', 'Matthew', 'Nancy', 'Will', 'Jagger', 'Grace X', 'Oscar', 'Stella Y', 'Grant', 'Catherine', 'Andy', 'June', 'Grace W', 'Anne', 'Katerina', 'Celine', 'Sophie', 'Tyler', 'Owen', 'Mianmian', 'Austen', 'Francis', 'Grace N', 'Stella S', 'Zachary', 'Kyla', 'Rene', 'Aurora', 'Hannah', 'Rebecca', 'Shine', 'Jacob', 'Elon'
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

const msBandTeacherModeOrder = ['Shine', 'Celine', 'Rebecca', 'Grant', 'Andy', 'Grace X', 'Oscar', 'Matthew', 'Nancy', 'Grace W', 'Austen', 'Stella S', 'Katerina', 'Kyla', 'Mianmian', 'June', 'Stella Y', 'Grace N', 'Catherine', 'Hannah', 'Anne', 'Tyler', 'Francis', 'Elon', 'Owen', 'Zachary', 'Sophie', 'Jacob', 'Jacky', 'Rene', 'Jagger', 'Aurora', 'Will'];

const msBandThursdayStudents = [
    'Andy', 'June', 'Grace W', 'Anne', 'Katerina', 'Celine', 'Sophie', 'Tyler', 'Owen', 'Mianmian', 'Austen', 'Francis', 'Grace N', 'Stella S', 'Zachary', 'Kyla', 'Rene', 'Aurora', 'Hannah', 'Rebecca', 'Shine', 'Jacob', 'Elon'
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

const msBandThursdayTeacherModeOrder = ['Shine', 'Celine', 'Rebecca', 'Andy', 'Grace W', 'Austen', 'Stella S', 'Katerina', 'Kyla', 'Mianmian', 'June', 'Grace N', 'Hannah', 'Anne', 'Tyler', 'Francis', 'Elon', 'Owen', 'Zachary', 'Sophie', 'Jacob', 'Rene', 'Aurora'];

const hsBandStudents = [
    'Henry','Emily','Ethan','Tiger','Jim','Luna','Steven','Jennifer','Calvin Y','Leo','Calvin Z'
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

const hsBandTeacherModeOrder = ['Henry','Emily','Ethan','Tiger','Jim','Luna','Steven','Jennifer','Calvin Y','Leo','Calvin Z'];