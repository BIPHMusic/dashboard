const masterList = [
    //Production Tech
    {"name": "Fiona", "liveschoolName": "Fiona Fangyuan Bi", "house": "Red", "birthdate": "2009-04-21", "altName": "Fiona"},
    {"name": "Jimmy", "liveschoolName": "Jimmy Jun Ming Chen", "house": "Yellow", "birthdate": "2009-01-15", "altName": "Jimmy"},
    {"name": "Kevin", "liveschoolName": "Kevin Ka Ming Chen", "house": "Red", "birthdate": "2007-06-29", "altName": "Kevin"},
    {"name": "Mia", "liveschoolName": "Mia Yuhan Chen", "house": "Yellow", "birthdate": "2007-09-19", "altName": "Mia"},
    {"name": "Howard", "liveschoolName": "Howard Haochuan Ding", "house": "Blue", "birthdate": "2008-05-09", "altName": "Howard"},
    {"name": "Vlan", "liveschoolName": "Vlan Wai Lun Dong", "house": "Green", "birthdate": "2009-02-21", "altName": "Vlan"},
    {"name": "Zoe", "liveschoolName": "Zoe He", "house": "Green", "birthdate": "2007-06-13", "altName": "Zoe"},
    {"name": "Voorhis", "liveschoolName": "Vivi Qiyue Jin", "house": "Yellow", "birthdate": "2008-01-09", "altName": "Vorhiss"},
    {"name": "Ming Hon", "liveschoolName": "Ming Hon Li", "house": "Red", "birthdate": "2009-02-07", "altName": "Ming Hon"},
    {"name": "Kiki", "liveschoolName": "Kiki Peiwen Li", "house": "Red", "birthdate": "2007-11-21", "altName": "Kiki"},
    {"name": "Yolanda", "liveschoolName": "Yolanda Yuqian Li", "house": "Red", "birthdate": "2007-10-02", "altName": "Yo londa"},
    {"name": "Stella", "liveschoolName": "Stella Yuxuan Li", "house": "Green", "birthdate": "2008-07-02", "altName": "Stella"},
    {"name": "Angel", "liveschoolName": "Angel An Jie Lin", "house": "Yellow", "birthdate": "2009-08-13", "altName": "Angel"},
    {"name": "Vincent", "liveschoolName": "Vincent Haisu Mu", "house": "Red", "birthdate": "2007-12-29", "altName": "Vincent"},
    {"name": "Edward", "liveschoolName": "Edward Zijian Sheng", "house": "Yellow", "birthdate": "2007-04-02", "altName": "Edward"},
    {"name": "Diego", "liveschoolName": "Diego Qiaoyue Su", "house": "Blue", "birthdate": "2008-07-09", "altName": "Diego"},
    {"name": "Chloe", "liveschoolName": "Chloe Qinghe Wang", "house": "Blue", "birthdate": "2010-02-01", "altName": "Chlowi"},
    {"name": "Jerry", "liveschoolName": "Jerry Yanrui Wu", "house": "Red", "birthdate": "2006-12-05", "altName": "Jerry"},
    {"name": "Alfred", "liveschoolName": "Alfred Ruihong Yan", "house": "Green", "birthdate": "2011-07-05", "altName": "Alfred"},
    {"name": "Angelina", "liveschoolName": "Angelina Sijia Yan", "house": "Blue", "birthdate": "2009-01-15", "altName": "Angelina"},
    {"name": "Howen", "liveschoolName": "Howen Jihong Yang", "house": "Blue", "birthdate": "2007-09-13", "altName": "Hau-in"},
    {"name": "Tommy", "liveschoolName": "Tommy Haolin Zhan", "house": "Green", "birthdate": "2008-03-27", "altName": "Tommy"},
    {"name": "Shawn", "liveschoolName": "Shawn Suyang Zhao", "house": "Blue", "birthdate": "2008-08-18", "altName": "Shawn"},
    {"name": "Isaac", "liveschoolName": "Isaac Chuxuan Zheng", "house": "Blue", "birthdate": "2007-12-05", "altName": "Isaac"},
    {"name": "Hannah", "liveschoolName": "Hannah Ruihan Chen", "house": "Yellow", "birthdate": "2013-01-19", "altName": "Hannah"},
    {"name": "Thomas", "liveschoolName": "Thomas Detong Zhu", "house": "Yellow", "birthdate": "2008-05-08", "altName": "Thomas"},

    //MS Band
    {"name": "Shine", "liveschoolName": "Shine Yu Duan", "house": "Blue", "birthdate": "2013-02-14", "altName": "Shine"},
    {"name": "Oscar", "liveschoolName": "Oscar Xinchen Fang", "house": "Red", "birthdate": "2013-03-20", "altName": "Oscar"},
    {"name": "Rebecca", "liveschoolName": "Rebecca Tsz Yin Cheung", "house": "Blue", "birthdate": "2012-05-28", "altName": "Rebecca"},
    {"name": "Andy", "liveschoolName": "Andy Xuanyu Feng", "house": "Green", "birthdate": "2012-01-13", "altName": "Andy"},
    {"name": "Grant", "liveschoolName": "Grant Zhang", "house": "Green", "birthdate": "2014-02-11", "altName": "Grant"},
    {"name": "Matthew", "liveschoolName": "Matthew Enhao Feng", "house": "Yellow", "birthdate": "2013-12-16", "altName": "Matthew"},
    {"name": "Nancy", "liveschoolName": "Nancy Han", "house": "Yellow", "birthdate": "2013-07-16", "altName": "Nancy"},
    {"name": "Grace X", "liveschoolName": "Grace Leqi Xiong", "house": "Red", "birthdate": "2013-01-19", "altName": "Grace--x"},
    {"name": "Celine", "liveschoolName": "Celine Yuting Shu", "house": "Blue", "birthdate": "2012-01-18", "altName": "Celine"},
    {"name": "Austen", "liveschoolName": "Austen Lihan Xie", "house": "Yellow", "birthdate": "2013-01-02", "altName": "Austen"},
    {"name": "Stella S", "liveschoolName": "Stella Yizhi Shang", "house": "Green", "birthdate": "2012-02-29", "altName": "Stella Shaong"},
    {"name": "Kyla", "liveschoolName": "Kyla Shi", "house": "Red", "birthdate": "2013-03-25", "altName": "Kyla"},
    {"name": "Mianmian", "liveschoolName": "Mianmian Mingxuan Lyu", "house": "Red", "birthdate": "2013-03-01", "altName": "Mienn Mienn"},
    {"name": "June", "liveschoolName": "June Ziqiao Qin", "house": "Blue", "birthdate": "2011-06-18", "altName": "June"},
    {"name": "Stella Y", "liveschoolName": "Stella Yuan", "house": "Yellow", "birthdate": "2012-01-28", "altName": "Stella Yunn"},
    {"name": "Grace N", "liveschoolName": "Grace Ning", "house": "Yellow", "birthdate": "2013-03-09", "altName": "Grace Ning"},
    {"name": "Anne", "liveschoolName": "Anne Jiayue An", "house": "Green", "birthdate": "2011-06-13", "altName": "Anne"},
    {"name": "Tyler", "liveschoolName": "Tyler Xiang Li", "house": "Red", "birthdate": "2011-12-28", "altName": "Tyler"},
    {"name": "Francis", "liveschoolName": "Francis Liu", "house": "Blue", "birthdate": "2013-01-31", "altName": "Francis"},
    {"name": "Owen", "liveschoolName": "Owen Qizhiyaun He", "house": "Green", "birthdate": "2012-11-30", "altName": "Owen"},
    {"name": "Zach", "liveschoolName": "Zachary Yang", "house": "Green", "birthdate": "2012-12-29", "altName": "Zach"},
    {"name": "Sophie", "liveschoolName": "Sophie Geng", "house": "Blue", "birthdate": "2012-05-14", "altName": "Sophie"},
    {"name": "Jacob", "liveschoolName": "Jacob I Chon He", "house": "Red", "birthdate": "2012-05-30", "altName": "Jacob"},
    {"name": "Jacky", "liveschoolName": "Jacky Tsz Hin Cheung", "house": "Green", "birthdate": "2014-08-30", "altName": "Jacky"},
    {"name": "Rene", "liveschoolName": "Rene King Hei Tang", "house": "Red", "birthdate": "2013-03-28", "altName": "Renee"},
    {"name": "Hannah", "liveschoolName": "Hannah Ruihan Chen", "house": "Yellow", "birthdate": "2013-01-19", "altName": "Hannah"},
    {"name": "Aurora", "liveschoolName": "Aurora Yingxi Zhong", "house": "Yellow", "birthdate": "2013-02-27", "altName": "Aurora"},

    //HS Band
    {"name": "Tiger", "liveschoolName": "Tiger Si Cheng Hou", "house": "Green", "birthdate": "2009-03-23", "altName": "Tiger"},
    {"name": "Leo", "liveschoolName": "Leo Ruikun Li", "house": "Blue", "birthdate": "2011-07-06", "altName": "Leo"},
    {"name": "David", "liveschoolName": "David Peiyu Liang", "house": "Red", "birthdate": "2008-02-03", "altName": "David"},
    {"name": "Steven", "liveschoolName": "Steven Siyuan Meng", "house": "Red", "birthdate": "2010-06-24", "altName": "Steven"},
    {"name": "Jennifer", "liveschoolName": "Jennifer Yan Yi Mou", "house": "Yellow", "birthdate": "2010-06-08", "altName": "Jennifer"},
    {"name": "Henry", "liveschoolName": "Henry Shi", "house": "Red", "birthdate": "2009-09-10", "altName": "Henry"},
    {"name": "Ethan", "liveschoolName": "Ethan Yi Xuan Wang", "house": "Yellow", "birthdate": "2009-06-19", "altName": "Ethan"},
    {"name": "Calvin Y", "liveschoolName": "Calvin Kuang Yan", "house": "Yellow", "birthdate": "2009-08-17", "altName": "Calvin Yen"},
    {"name": "Luna", "liveschoolName": "Luna Mingxi Zhan", "house": "Red", "birthdate": "2009-07-08", "altName": "Luna"},
    {"name": "Calvin Z", "liveschoolName": "Calvin Zihao Zhang", "house": "Blue", "birthdate": "2010-04-21", "altName": "Calvin Jong"},
    {"name": "Jim", "liveschoolName": "Jim Zi Jing Zheng", "house": "Yellow", "birthdate": "2009-02-16", "altName": "Jimm"},

    //all others
    {"name": "Chris", "liveschoolName": "Chris Zirui Peng", "house": "Green", "birthdate": "2007-03-24", "altName": "Chris"},
    {"name": "Lucy", "liveschoolName": "Lucy Ruxin Sheng", "house": "Blue", "birthdate": "2008-05-16", "altName": "Lucy"},
    {"name": "Johnny", "liveschoolName": "Johnny Zhongjie Yi", "house": "Red", "birthdate": "2007-11-14", "altName": "Johnny"},
    {"name": "Daniel", "liveschoolName": "Daniel Tianyu He", "house": "Blue", "birthdate": "2009-09-04", "altName": "Daniel"},
    {"name": "Agu", "liveschoolName": "Agu Zi-Zhen Huang", "house": "Yellow", "birthdate": "2008-11-01", "altName": "Aagoo"},
    {"name": "Michael", "liveschoolName": "Michael Bao Shen Chen", "house": "Blue", "birthdate": "2008-12-25", "altName": "Michael"},
    {"name": "Steve", "liveschoolName": "Steve Haoxuan Wang", "house": "Green", "birthdate": "2012-09-09", "altName": "Steve"},
    {"name": "Ben", "liveschoolName": "Ben Luyue Chen", "house": "Yellow", "birthdate": "2007-12-17", "altName": "Ben"},
    {"name": "Stuart", "liveschoolName": "Stuart Beichen Yang", "house": "Yellow", "birthdate": "", "altName": "Stuart"},
    {"name": "Kevin J", "liveschoolName": "Kevin Jincheng Jiao", "house": "Blue", "birthdate": "", "altName": "Kevin J"},
    {"name": "Vivi", "liveschoolName": "Vivi Xinran Xia", "house": "Red", "birthdate": "", "altName": "Vivi"},
    {"name": "Jason", "liveschoolName": "Jason Junxing Zhu", "house": "Red", "birthdate": "", "altName": "Jason"},
    {"name": "Karen", "liveschoolName": "Karen Hou", "house": "Red", "birthdate": "", "altName": "Karen"},
    {"name": "LiPai", "liveschoolName": "Pai Li", "house": "Yellow", "birthdate": "", "altName": "LiPai"},
    {"name": "James", "liveschoolName": "James Tianyou Dai", "house": "Blue", "birthdate": "", "altName": "James"},
    {"name": "Alyssa", "liveschoolName": "Alyssa Peng", "house": "Blue", "birthdate": "", "altName": "Alyssa"},
    {"name": "Ben", "liveschoolName": "Ben Luyue Chen", "house": "Yellow", "birthdate": "", "altName": "Ben"},
    {"name": "Alan Wen", "liveschoolName": "Alan Tianlin Wen", "house": "Yellow", "birthdate": "", "altName": "Alan"},
    {"name": "Ivan", "liveschoolName": "Ivan Yan Zhi Lin", "house": "Green", "birthdate": "", "altName": "Ivan"},
    {"name": "Allen Yu", "liveschoolName": "Allen Kwun Ting Yu", "house": "Yellow", "birthdate": "", "altName": "Allen"},
    {"name": "Kitty", "liveschoolName": "Kitty Yuzi Zhang", "house": "Yellow", "birthdate": "", "altName": "Kitty"},
    {"name": "Alex", "liveschoolName": "Alex Tsz To Huang", "house": "Blue", "birthdate": "", "altName": "Alex"},
    {"name": "Emily", "liveschoolName": "Emily Xuan Tong Ke", "house": "Yellow", "birthdate": "", "altName": "Emily"},
    {"name": "Fiona", "liveschoolName": "Fiona Fang", "house": "Blue", "birthdate": "", "altName": "Fiona"},
    {"name": "Mandy", "liveschoolName": "Mandy Ming Luo", "house": "Green", "birthdate": "", "altName": "Mandy"},
    {"name": "Hubert", "liveschoolName": "Hubert Hongyi Chen", "house": "Yellow", "birthdate": "", "altName": "Hubert"},
    {"name": "Tison", "liveschoolName": "Tison Zekai Wu", "house": "Yellow", "birthdate": "", "altName": "Tison"},
    {"name": "Christi", "liveschoolName": "Christi Yawen Zhu", "house": "Yellow", "birthdate": "", "altName": "Christi"},
    {"name": "Yaffa", "liveschoolName": "Yaffa Hei Wun Luo", "house": "Green", "birthdate": "", "altName": "Yaffa"},
    {"name": "Odelia", "liveschoolName": "Odelia Yunhan Xie", "house": "Green", "birthdate": "", "altName": "Odelia"},
    {"name": "Alyssa", "liveschoolName": "Alyssa Peng", "house": "Blue", "birthdate": "2012-03-26", "altName": "Alyssa"},
    {"name": "Tim", "liveschoolName": "Tim Yaheng Wang", "house": "Green", "birthdate": "", "altName": "Tim"},
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
   'Jacky', 'Oscar', 'Matthew', 'Nancy', 'Grace X', 'Stella Y', 'Grant', 'Anne', 'Hannah', 'Rebecca', 'Shine', 'Andy', 'Sophie', 'Jacob', 'Owen', 'Tyler', 'Francis', 'Mianmian', 'Grace N', 'June', 'Stella S', 'Kyla', 'Celine', 'Rene', 'Austen', 'Zach', 'Aurora'
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

const msBandTeacherModeOrder = ['Shine', 'Oscar', 'Rebecca', 'Andy', 'Matthew', 'Grant', 'Jacky', 'Nancy', 'Grace X', 'Celine', 'Austen', 'Stella S', 'Kyla', 'Mianmian', 'June', 'Stella Y', 'Grace N', 'Anne', 'Tyler', 'Francis', 'Owen', 'Zach', 'Sophie', 'Jacob', 'Rene', 'Hannah', 'Aurora'];




const msBandThursdayStudents = [
    'Anne', 'Hannah', 'Rebecca', 'Shine', 'Andy', 'Sophie', 'Jacob', 'Owen', 'Tyler', 'Francis', 'Mianmian', 'Grace N', 'June', 'Stella S', 'Kyla', 'Celine', 'Rene', 'Austen', 'Zach', 'Aurora'
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

const msBandThursdayTeacherModeOrder = ['Shine', 'Rebecca', 'Andy', 'Celine', 'Austen', 'Stella S', 'Kyla', 'Mianmian', 'June', 'Grace N', 'Anne', 'Tyler', 'Francis', 'Owen', 'Zach', 'Sophie', 'Jacob', 'Rene', 'Hannah', 'Aurora'];





const hsBandStudents = [
    'Tiger', 'Leo', 'David', 'Steven', 'Jennifer', 'Henry', 'Ethan', 'Calvin Y', 'Luna', 'Calvin Z', 'Jim'
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

const hsBandTeacherModeOrder = ['Tiger', 'Leo', 'David', 'Steven', 'Jennifer', 'Henry', 'Ethan', 'Calvin Y', 'Luna', 'Calvin Z', 'Jim'];