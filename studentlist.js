const masterList = [
    //Production Tech
    {"name": "Fiona", "liveschoolName": "Fiona Fangyuan Bi", "house": "Red", "birthdate": ""},
    {"name": "Jimmy", "liveschoolName": "Jimmy Jun Ming Chen", "house": "Yellow", "birthdate": ""},
    {"name": "Kevin", "liveschoolName": "Kevin Ka Ming Chen", "house": "Red", "birthdate": "2007-06-29"},
    {"name": "Jess", "liveschoolName": "Jess Ka Shun Chen", "house": "Green", "birthdate": ""},
    {"name": "Howard", "liveschoolName": "Howard Haochuan Ding", "house": "Blue", "birthdate": "2008-05-09"},
    {"name": "Vlan", "liveschoolName": "Vlan Wai Lun Dong", "house": "Green", "birthdate": ""},
    {"name": "Jennie", "liveschoolName": "Jennie Jingyi Fan", "house": "Red", "birthdate": ""},
    {"name": "Zoe", "liveschoolName": "Zoe He", "house": "Green", "birthdate": ""},
    {"name": "Voorhis", "liveschoolName": "Vivi Qiyue Jin", "house": "Yellow", "birthdate": ""},
    {"name": "Kiki", "liveschoolName": "Kiki Peiwen Li", "house": "Red", "birthdate": ""},
    {"name": "Yolanda", "liveschoolName": "Yolanda Yuqian Li", "house": "Red", "birthdate": ""},
    {"name": "Stella", "liveschoolName": "Stella Yuxuan Li", "house": "Green", "birthdate": ""},
    {"name": "Angel", "liveschoolName": "Angel An Jie Lin", "house": "Yellow", "birthdate": ""},
    {"name": "Vincent", "liveschoolName": "Vincent Haisu Mu", "house": "Red", "birthdate": "2007-12-29"},
    {"name": "Edward", "liveschoolName": "Edward Zijian Sheng", "house": "Yellow", "birthdate": ""},
    {"name": "Diego", "liveschoolName": "Diego Qiaoyue Su", "house": "Blue", "birthdate": "2008-07-09"},
    {"name": "Chloe", "liveschoolName": "Chloe Qinghe Wang", "house": "Blue", "birthdate": ""},
    {"name": "Jerry", "liveschoolName": "Jerry Yanrui Wu", "house": "Red", "birthdate": ""},
    {"name": "Alfred", "liveschoolName": "Alfred Ruihong Yan", "house": "Green", "birthdate": ""},
    {"name": "Angelina", "liveschoolName": "Angelina Sijia Yan", "house": "Blue", "birthdate": "2009-01-15"},
    {"name": "Howen", "liveschoolName": "Howen Jihong Yang", "house": "Blue", "birthdate": ""},
    {"name": "Tommy", "liveschoolName": "Tommy Haolin Zhan", "house": "Green", "birthdate": ""},
    {"name": "Shawn", "liveschoolName": "Shawn Suyang Zhao", "house": "Blue", "birthdate": ""},
    {"name": "Isaac", "liveschoolName": "Isaac Chuxuan Zheng", "house": "Blue", "birthdate": ""},
    {"name": "Hannah", "liveschoolName": "Alyssa Zihan Zhou", "house": "Red", "birthdate": ""},
    {"name": "Thomas", "liveschoolName": "Thomas Detong Zhu", "house": "Yellow", "birthdate": ""},
    {"name": "Ray", "liveschoolName": "Ray Jingfei Xu", "house": "Yellow", "birthdate": ""},
    {"name": "Mia", "liveschoolName": "Mia Yuhan Chen", "house": "Yellow", "birthdate": ""},

    //MS Band
    {"name": "Jacky", "liveschoolName": "Shine Yu Duan", "house": "Green", "birthdate": ""},
    {"name": "Oscar", "liveschoolName": "Celine Yuting Shu", "house": "Red", "birthdate": ""},
    {"name": "Matthew", "liveschoolName": "Rebecca Tsz Yin Cheung", "house": "Yellow", "birthdate": ""},
    {"name": "Nancy", "liveschoolName": "Grant Zhang", "house": "Yellow", "birthdate": ""},
    {"name": "Grace X", "liveschoolName": "Andy Xuanyu Feng", "house": "Red", "birthdate": ""},
    {"name": "Stella Y", "liveschoolName": "Grace Leqi Xiong", "house": "Yellow", "birthdate": ""},
    {"name": "Grant", "liveschoolName": "Oscar Xinchen Fang", "house": "Green", "birthdate": ""},
    {"name": "Catherine", "liveschoolName": "Matthew Enhao Feng", "house": "Green", "birthdate": ""},
    {"name": "Anne", "liveschoolName": "Nancy Han", "house": "Green", "birthdate": "2011-06-13"},
    {"name": "Hannah", "liveschoolName": "Austen Lihan Xie", "house": "Yellow", "birthdate": ""},
    {"name": "Rebecca", "liveschoolName": "Stella Yizhi Shang", "house": "Blue", "birthdate": ""},
    {"name": "Shine", "liveschoolName": "Katerina Xinyu Fan", "house": "Blue", "birthdate": "2013-02-14"},
    {"name": "Katerina", "liveschoolName": "Kyla Shi", "house": "Red", "birthdate": ""},
    {"name": "Andy", "liveschoolName": "Mianmian Mingxuan Lyu", "house": "Green", "birthdate": ""},
    {"name": "Sophie", "liveschoolName": "June Ziqiao Qin", "house": "Blue", "birthdate": "2012-05-14"},
    {"name": "Jacob", "liveschoolName": "Stella Yuan", "house": "Red", "birthdate": ""},
    {"name": "Owen", "liveschoolName": "Grace Ning", "house": "Green", "birthdate": "2012-11-30"},
    {"name": "Tyler", "liveschoolName": "Anne Jiayue An", "house": "Red", "birthdate": ""},
    {"name": "Francis", "liveschoolName": "Tyler Xiang Li", "house": "Blue", "birthdate": "2013-01-31"},
    {"name": "Mianmian", "liveschoolName": "Francis Liu", "house": "Red", "birthdate": "2013-03-01"},
    {"name": "Grace N", "liveschoolName": "Owen Qizhiyaun He", "house": "Yellow", "birthdate": "2013-03-09"},
    {"name": "June", "liveschoolName": "Zachary Yang", "house": "Blue", "birthdate": "2011-06-18"},
    {"name": "Stella S", "liveschoolName": "Sophie Geng", "house": "Green", "birthdate": ""},
    {"name": "Kyla", "liveschoolName": "Jacob I Chon He", "house": "Red", "birthdate": ""},
    {"name": "Celine", "liveschoolName": "Jacky Tsz Hin Cheung", "house": "Blue", "birthdate": ""},
    {"name": "Rene", "liveschoolName": "Rene King Hei Tang", "house": "Red", "birthdate": "2013-03-28"},
    {"name": "Austen", "liveschoolName": "Catherine Qiannuo Zhu", "house": "Yellow", "birthdate": ""},
    {"name": "Zachary", "liveschoolName": "Hannah Ruihan Chen", "house": "Green", "birthdate": ""},
    {"name": "Aurora", "liveschoolName": "Aurora Yingxi Zhong", "house": "Yellow", "birthdate": "2013-02-27"},

    //HS Band
    {"name": "Tiger", "liveschoolName": "Tiger Si Cheng Hou", "house": "Green", "birthdate": "2009-03-23"},
    {"name": "Leo", "liveschoolName": "Leo Ruikun Li", "house": "Blue", "birthdate": "2011-07-06"},
    {"name": "Steven", "liveschoolName": "Steven Siyuan Meng", "house": "Red", "birthdate": "2010-06-24"},
    {"name": "Jennifer", "liveschoolName": "Jennifer Yan Yi Mou", "house": "Yellow", "birthdate": ""},
    {"name": "Henry", "liveschoolName": "Henry Shi", "house": "Red", "birthdate": "2009-09-10"},
    {"name": "Ethan", "liveschoolName": "Ethan Yi Xuan Wang", "house": "Yellow", "birthdate": "2009-06-19"},
    {"name": "Calvin Y", "liveschoolName": "Calvin Kuang Yan", "house": "Yellow", "birthdate": "2009-08-17"},
    {"name": "Luna", "liveschoolName": "Luna Mingxi Zhan", "house": "Red", "birthdate": "2009-07-08"},
    {"name": "Calvin Z", "liveschoolName": "Calvin Zihao Zhang", "house": "Blue", "birthdate": "2010-04-21"},
    {"name": "Jim", "liveschoolName": "Jim Zi Jing Zheng", "house": "Yellow", "birthdate": ""},

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
    'Jess', 'Howen', 'Shawn', 'Edward', 'Jerry', 'Diego', 'Isaac', 'Thomas', 'Kevin', 'Howard', 'Zoe', 'Kiki', 'Vincent', 'Vlan', 'Hannah', 'Chloe', 'Voorhis', 'Yolanda', 'Stella', 'Angel', 'Tommy', 'Fiona', 'Jimmy', 'Angelina', 'Jennie', 'Alfred', 'Mia', 'Ray'
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

const productionTechTeacherModeOrder = ['Jess', 'Howen', 'Shawn', 'Edward', 'Jerry', 'Diego', 'Isaac', 'Thomas', 'Kevin', 'Howard', 'Zoe', 'Kiki', 'Vincent', 'Vlan', 'Hannah', 'Chloe', 'Voorhis', 'Yolanda', 'Stella', 'Angel', 'Tommy', 'Fiona', 'Jimmy', 'Angelina', 'Jennie', 'Alfred', 'Mia', 'Ray'];

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