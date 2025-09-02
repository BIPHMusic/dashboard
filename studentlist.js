const masterList = [
    //Production Tech
    {"name": "Fiona", "liveschoolName": "Fiona Fangyuan Bi", "house": "Red", "birthdate": "2009-04-21"},
    {"name": "Jimmy", "liveschoolName": "Jimmy Jun Ming Chen", "house": "Yellow", "birthdate": "2009-01-15"},
    {"name": "Kevin", "liveschoolName": "Kevin Ka Ming Chen", "house": "Red", "birthdate": "2007-06-29"},
    {"name": "Mia", "liveschoolName": "Mia Yuhan Chen", "house": "Yellow", "birthdate": "2007-09-19"},
    {"name": "Howard", "liveschoolName": "Howard Haochuan Ding", "house": "Blue", "birthdate": "2008-05-09"},
    {"name": "Vlan", "liveschoolName": "Vlan Wai Lun Dong", "house": "Green", "birthdate": "2009-02-21"},
    {"name": "Zoe", "liveschoolName": "Zoe He", "house": "Green", "birthdate": "2007-06-13"},
    {"name": "Voorhis", "liveschoolName": "Vivi Qiyue Jin", "house": "Yellow", "birthdate": "2008-01-09"},
    {"name": "Ming Hon", "liveschoolName": "Ming Hon Li", "house": "Red", "birthdate": "2009-02-07"},
    {"name": "Kiki", "liveschoolName": "Kiki Peiwen Li", "house": "Red", "birthdate": "2007-11-21"},
    {"name": "Yolanda", "liveschoolName": "Yolanda Yuqian Li", "house": "Red", "birthdate": "2007-10-02"},
    {"name": "Stella", "liveschoolName": "Stella Yuxuan Li", "house": "Green", "birthdate": "2008-07-02"},
    {"name": "Angel", "liveschoolName": "Angel An Jie Lin", "house": "Yellow", "birthdate": "2009-08-13"},
    {"name": "Vincent", "liveschoolName": "Vincent Haisu Mu", "house": "Red", "birthdate": "2007-12-29"},
    {"name": "Edward", "liveschoolName": "Edward Zijian Sheng", "house": "Yellow", "birthdate": "2007-04-02"},
    {"name": "Diego", "liveschoolName": "Diego Qiaoyue Su", "house": "Blue", "birthdate": "2008-07-09"},
    {"name": "Chloe", "liveschoolName": "Chloe Qinghe Wang", "house": "Blue", "birthdate": "2010-02-01"},
    {"name": "Jerry", "liveschoolName": "Jerry Yanrui Wu", "house": "Red", "birthdate": "2006-12-05"},
    {"name": "Alfred", "liveschoolName": "Alfred Ruihong Yan", "house": "Green", "birthdate": "2011-07-05"},
    {"name": "Angelina", "liveschoolName": "Angelina Sijia Yan", "house": "Blue", "birthdate": "2009-01-15"},
    {"name": "Howen", "liveschoolName": "Howen Jihong Yang", "house": "Blue", "birthdate": "2007-09-13"},
    {"name": "Tommy", "liveschoolName": "Tommy Haolin Zhan", "house": "Green", "birthdate": "2008-03-27"},
    {"name": "Shawn", "liveschoolName": "Shawn Suyang Zhao", "house": "Blue", "birthdate": "2008-08-18"},
    {"name": "Isaac", "liveschoolName": "Isaac Chuxuan Zheng", "house": "Blue", "birthdate": "2007-12-05"},
    {"name": "Hannah", "liveschoolName": "Alyssa Zihan Zhou", "house": "Red", "birthdate": "2008-10-28"},
    {"name": "Thomas", "liveschoolName": "Thomas Detong Zhu", "house": "Yellow", "birthdate": "2008-05-08"},

    //MS Band
    {"name": "Jacky", "liveschoolName": "Jacky Tsz Hin Cheung", "house": "Green", "birthdate": "2014-08-30"},
    {"name": "Oscar", "liveschoolName": "Oscar Xinchen Fang", "house": "Red", "birthdate": "2013-03-20"},
    {"name": "Matthew", "liveschoolName": "Matthew Enhao Feng", "house": "Yellow", "birthdate": "2013-12-16"},
    {"name": "Nancy", "liveschoolName": "Nancy Han", "house": "Yellow", "birthdate": "2013-07-16"},
    {"name": "Grace X", "liveschoolName": "Grace Leqi Xiong", "house": "Red", "birthdate": "2013-01-19"},
    {"name": "Stella Y", "liveschoolName": "Stella Yuan", "house": "Yellow", "birthdate": "2012-01-28"},
    {"name": "Grant", "liveschoolName": "Grant Zhang", "house": "Green", "birthdate": "2014-02-11"},
    {"name": "Catherine", "liveschoolName": "Catherine Qiannuo Zhu", "house": "Green", "birthdate": "2014-08-21"},
    {"name": "Anne", "liveschoolName": "Anne Jiayue An", "house": "Green", "birthdate": "2011-06-13"},
    {"name": "Hannah", "liveschoolName": "Hannah Ruihan Chen", "house": "Yellow", "birthdate": "2013-01-19"},
    {"name": "Rebecca", "liveschoolName": "Rebecca Tsz Yin Cheung", "house": "Blue", "birthdate": "2012-05-28"},
    {"name": "Shine", "liveschoolName": "Shine Yu Duan", "house": "Blue", "birthdate": "2013-02-14"},
    {"name": "Andy", "liveschoolName": "Andy Xuanyu Feng", "house": "Green", "birthdate": "2012-01-13"},
    {"name": "Sophie", "liveschoolName": "Sophie Geng", "house": "Blue", "birthdate": "2012-05-14"},
    {"name": "Jacob", "liveschoolName": "Jacob I Chon He", "house": "Red", "birthdate": "2012-05-30"},
    {"name": "Owen", "liveschoolName": "Owen Qizhiyaun He", "house": "Green", "birthdate": "2012-11-30"},
    {"name": "Tyler", "liveschoolName": "Tyler Xiang Li", "house": "Red", "birthdate": "2011-12-28"},
    {"name": "Francis", "liveschoolName": "Francis Liu", "house": "Blue", "birthdate": "2013-01-31"},
    {"name": "Mianmian", "liveschoolName": "Mianmian Mingxuan Lyu", "house": "Red", "birthdate": "2013-03-01"},
    {"name": "Grace N", "liveschoolName": "Grace Ning", "house": "Yellow", "birthdate": "2013-03-09"},
    {"name": "June", "liveschoolName": "June Ziqiao Qin", "house": "Blue", "birthdate": "2011-06-18"},
    {"name": "Stella S", "liveschoolName": "Stella Yizhi Shang", "house": "Green", "birthdate": "2012-02-29"},
    {"name": "Kyla", "liveschoolName": "Kyla Shi", "house": "Red", "birthdate": "2013-03-25"},
    {"name": "Celine", "liveschoolName": "Celine Yuting Shu", "house": "Blue", "birthdate": "2012-01-18"},
    {"name": "Rene", "liveschoolName": "Rene King Hei Tang", "house": "Red", "birthdate": "2013-03-28"},
    {"name": "Austen", "liveschoolName": "Austen Lihan Xie", "house": "Yellow", "birthdate": "2013-01-02"},
    {"name": "Zachary", "liveschoolName": "Zachary Yang", "house": "Green", "birthdate": "2012-12-29"},
    {"name": "Aurora", "liveschoolName": "Aurora Yingxi Zhong", "house": "Yellow", "birthdate": "2013-02-27"},

    //HS Band
    {"name": "Tiger", "liveschoolName": "Tiger Si Cheng Hou", "house": "Green", "birthdate": "2009-03-23"},
    {"name": "Leo", "liveschoolName": "Leo Ruikun Li", "house": "Blue", "birthdate": "2011-07-06"},
    {"name": "Steven", "liveschoolName": "Steven Siyuan Meng", "house": "Red", "birthdate": "2010-06-24"},
    {"name": "Jennifer", "liveschoolName": "Jennifer Yan Yi Mou", "house": "Yellow", "birthdate": "2010-06-08"},
    {"name": "Henry", "liveschoolName": "Henry Shi", "house": "Red", "birthdate": "2009-09-10"},
    {"name": "Ethan", "liveschoolName": "Ethan Yi Xuan Wang", "house": "Yellow", "birthdate": "2009-06-19"},
    {"name": "Calvin Y", "liveschoolName": "Calvin Kuang Yan", "house": "Yellow", "birthdate": "2009-08-17"},
    {"name": "Luna", "liveschoolName": "Luna Mingxi Zhan", "house": "Red", "birthdate": "2009-07-08"},
    {"name": "Calvin Z", "liveschoolName": "Calvin Zihao Zhang", "house": "Blue", "birthdate": "2010-04-21"},
    {"name": "Jim", "liveschoolName": "Jim Zi Jing Zheng", "house": "Yellow", "birthdate": "2009-02-16"},
    {"name": "David", "liveschoolName": "David Peiyu Liang", "house": "Red", "birthdate": "2011-06-21"},

    //all others
    {"name": "Chris", "liveschoolName": "Chris", "house": "Green", "birthdate": "2007-03-24"},
    {"name": "Lucy", "liveschoolName": "Lucy", "house": "Blue", "birthdate": "2008-05-16"},
    {"name": "Johnny", "liveschoolName": "Johnny", "house": "Red", "birthdate": "2007-11-14"},
    {"name": "Daniel", "liveschoolName": "Daniel", "house": "Blue", "birthdate": "2009-09-04"},
    {"name": "Agu", "liveschoolName": "Agu", "house": "Yellow", "birthdate": "2008-11-01"},
    {"name": "Michael", "liveschoolName": "Michael", "house": "Blue", "birthdate": "2008-12-25"},
    {"name": "Steve", "liveschoolName": "Steve", "house": "Green", "birthdate": "2012-09-09"},
    {"name": "Ben", "liveschoolName": "Ben", "house": "Yellow", "birthdate": "2007-12-17"},
    {"name": "Stuart", "liveschoolName": "Stuart", "house": "Yellow", "birthdate": "2007-12-17"},
];

const productionTechStudents = [
    'Fiona', 'Jimmy', 'Kevin', 'Mia', 'Howard', 'Vlan', 'Zoe', 'Voorhis', 'Ming Hon', 'Kiki', 'Yolanda', 'Stella', 'Angel', 'Vincent', 'Edward', 'Diego', 'Chloe', 'Jerry', 'Alfred', 'Angelina', 'Howen', 'Tommy', 'Shawn', 'Isaac', 'Hannah', 'Thomas'
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

const productionTechTeacherModeOrder = ['Fiona', 'Jimmy', 'Kevin', 'Mia', 'Howard', 'Vlan', 'Zoe', 'Voorhis', 'Ming Hon', 'Kiki', 'Yolanda', 'Stella', 'Angel', 'Vincent', 'Edward', 'Diego', 'Chloe', 'Jerry', 'Alfred', 'Angelina', 'Howen', 'Tommy', 'Shawn', 'Isaac', 'Hannah', 'Thomas'];





const msBandStudents = [
   'Jacky', 'Oscar', 'Matthew', 'Nancy', 'Grace X', 'Stella Y', 'Grant', 'Catherine', 'Anne', 'Hannah', 'Rebecca', 'Shine', 'Andy', 'Sophie', 'Jacob', 'Owen', 'Tyler', 'Francis', 'Mianmian', 'Grace N', 'June', 'Stella S', 'Kyla', 'Celine', 'Rene', 'Austen', 'Zachary', 'Aurora'
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

const msBandTeacherModeOrder = ['Shine', 'Oscar', 'Rebecca', 'Andy', 'Grant', 'Matthew', 'Nancy', 'Grace X', 'Celine', 'Austen', 'Stella S', 'Kyla', 'Mianmian', 'June', 'Stella Y', 'Grace N', 'Anne', 'Tyler', 'Francis', 'Owen', 'Zachary', 'Sophie', 'Jacob', 'Jacky', 'Rene', 'Catherine', 'Hannah', 'Aurora'];




const msBandThursdayStudents = [
    'Anne', 'Hannah', 'Rebecca', 'Shine', 'Andy', 'Sophie', 'Jacob', 'Owen', 'Tyler', 'Francis', 'Mianmian', 'Grace N', 'June', 'Stella S', 'Kyla', 'Celine', 'Rene', 'Austen', 'Zachary', 'Aurora'
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

const msBandThursdayTeacherModeOrder = ['Shine', 'Rebecca', 'Andy', 'Celine', 'Austen', 'Stella S', 'Kyla', 'Mianmian', 'June', 'Grace N', 'Anne', 'Tyler', 'Francis', 'Owen', 'Zachary', 'Sophie', 'Jacob', 'Rene', 'Hannah', 'Aurora'];





const hsBandStudents = [
    'Tiger', 'Leo', 'Steven', 'Jennifer', 'Henry', 'Ethan', 'Calvin Y', 'Luna', 'Calvin Z', 'Jim', 'David'
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

const hsBandTeacherModeOrder = ['Tiger', 'Leo', 'Steven', 'Jennifer', 'Henry', 'Ethan', 'Calvin Y', 'Luna', 'Calvin Z', 'Jim', 'David'];