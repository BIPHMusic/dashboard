const masterList = [
    //Tech Theater
    {"name": "Fiona", "liveschoolName": "Fiona Fangyuan Bi", "house": "Red", "birthdate": "2009-04-21", "altName": "Fiona"},
    {"name": "Julius", "liveschoolName": "Julius Jinchen Che", "house": "Green", "birthdate": "", "altName": "Julius"},
    {"name": "Harry", "liveschoolName": "Harry Chak Hau Zhang", "house": "Yellow", "birthdate": "", "altName": "Harry"},
    {"name": "Kevin", "liveschoolName": "Kevin Haichen Zhao", "house": "Blue", "birthdate": "", "altName": "Kevin"},
    {"name": "Bella", "liveschoolName": "Bella Yufei Bi", "house": "Yellow", "birthdate": "", "altName": "Bella"},
    {"name": "Allen", "liveschoolName": "Allen He", "house": "Red", "birthdate": "", "altName": "Allen"},
    {"name": "Cynthia", "liveschoolName": "Cynthia Sum Chi Liaw", "house": "Green", "birthdate": "", "altName": "Cynthia"},
    {"name": "Yaffa", "liveschoolName": "Yaffa Hei Wun Luo", "house": "Green", "birthdate": "", "altName": "Yaffa"},
    {"name": "Rachelle", "liveschoolName": "Rachelle Xinxin Zhang", "house": "Yellow", "birthdate": "", "altName": "Rachelle"},
    {"name": "Beryl", "liveschoolName": "Tina Yantong Dong", "house": "Blue", "birthdate": "", "altName": "Beryl"},
    {"name": "Stella", "liveschoolName": "Stella Yuxuan Li", "house": "Green", "birthdate": "2008-07-02", "altName": "Stella"},
    {"name": "Kenny", "liveschoolName": "Kenny Yuan Wang", "house": "Green", "birthdate": "", "altName": "Kenny"},
    {"name": "Ricky", "liveschoolName": "Ricky Ruiqi Chen", "house": "Green", "birthdate": "", "altName": "Ricky"},
    {"name": "Vlan", "liveschoolName": "Vlan Wai Lun Dong", "house": "Green", "birthdate": "2009-02-21", "altName": "Vlan"},
    {"name": "Sophie", "liveschoolName": "Sophie Zhijia Zhuang", "house": "Yellow", "birthdate": "", "altName": "Sophie"},

    //AP Music Theory
    {"name": "Simone", "liveschoolName": "Simon Zimo Ma", "house": "Blue", "birthdate": "", "altName": "Simone"},
    {"name": "Thomas", "liveschoolName": "Thomas Hongyi Long", "house": "Red", "birthdate": "", "altName": "Thomas"},
    {"name": "Dora", "liveschoolName": "Dora Ziqian Zhang", "house": "Yellow", "birthdate": "", "altName": "Dora"},
    {"name": "Calvin", "liveschoolName": "Calvin Zihao Zhang", "house": "Blue", "birthdate": "", "altName": "Calvin"},
    {"name": "William", "liveschoolName": "William Zhiwen Zheng", "house": "Yellow", "birthdate": "", "altName": "William"},
    {"name": "Jocelyn", "liveschoolName": "Jocelyn Lan Bai", "house": "Blue", "birthdate": "", "altName": "Jocelyn"},
    {"name": "Teresa", "liveschoolName": "Teresa Mingxun Jiang", "house": "Green", "birthdate": "", "altName": "Teresa"},

    //MS Band
    {"name": "Anton", "liveschoolName": "Anton Jiayu Ding", "house": "Green", "birthdate": "", "altName": "Anton"},
    {"name": "Jefferey", "liveschoolName": "Jeffrey Nie", "house": "Blue", "birthdate": "", "altName": "Jefferey"},
    {"name": "Jason", "liveschoolName": "Jason Junfeng Shen", "house": "Red", "birthdate": "", "altName": "Jason"},
    {"name": "Stella S", "liveschoolName": "Stella Yizhi Shang", "house": "Green", "birthdate": "2012-02-29", "altName": "Stella Shaong"},
    {"name": "Zachary", "liveschoolName": "Zachary Yang", "house": "Green", "birthdate": "2012-12-29", "altName": "Zachary"},
    {"name": "Rebecca", "liveschoolName": "Rebecca Tsz Yin Cheung", "house": "Blue", "birthdate": "2012-05-28", "altName": "Rebecca"},
    {"name": "Shine", "liveschoolName": "Shine Yu Duan", "house": "Blue", "birthdate": "2013-02-14", "altName": "Shine"},
    {"name": "Kyla", "liveschoolName": "Kyla Shi", "house": "Red", "birthdate": "2013-03-25", "altName": "Kyla"},
    {"name": "Amanda", "liveschoolName": "Amanda Seoah Song", "house": "Green", "birthdate": "", "altName": "Amanda"},
    {"name": "Austen", "liveschoolName": "Austen Lihan Xie", "house": "Yellow", "birthdate": "2013-01-02", "altName": "Austen"},
    {"name": "Rene", "liveschoolName": "Rene King Hei Tang", "house": "Red", "birthdate": "2013-03-28", "altName": "Renee"},
    {"name": "Ethan", "liveschoolName": "Ethan Tsz Ip Zhang", "house": "Blue", "birthdate": "", "altName": "Ethan"},
    {"name": "Francis", "liveschoolName": "Francis Liu", "house": "Blue", "birthdate": "2013-01-31", "altName": "Francis"},
    {"name": "Jacky", "liveschoolName": "Jacky Tsz Hin Cheung", "house": "Green", "birthdate": "2014-08-30", "altName": "Jacky"},
    {"name": "Matthew", "liveschoolName": "Matthew Enhao Feng", "house": "Yellow", "birthdate": "2013-12-16", "altName": "Matthew"},
    {"name": "Oscar", "liveschoolName": "Oscar Xinchen Fang", "house": "Red", "birthdate": "2013-03-20", "altName": "Oscar"},
    {"name": "Grace X", "liveschoolName": "Grace Leqi Xiong", "house": "Red", "birthdate": "2013-01-19", "altName": "Grace--x"},
    {"name": "Kyra", "liveschoolName": "Kyra Jiaqi Yan", "house": "Yellow", "birthdate": "", "altName": "Kyra"},
    {"name": "Nancy", "liveschoolName": "Nancy Han", "house": "Yellow", "birthdate": "2013-07-16", "altName": "Nancy"},
    {"name": "Felix", "liveschoolName": "Felix Jiaxi Hong", "house": "Blue", "birthdate": "", "altName": "Felix"},
    {"name": "Paris", "liveschoolName": "Paris Shiyu Liang", "house": "Blue", "birthdate": "", "altName": "Paris"},
    {"name": "Coco", "liveschoolName": "Coco Yuguo Luo", "house": "Yellow", "birthdate": "", "altName": "Coco"},
    {"name": "Grant", "liveschoolName": "Grant Zhang", "house": "Green", "birthdate": "2014-02-11", "altName": "Grant"},

    //HS Band
    {"name": "Anne", "liveschoolName": "Anne Jiayue An", "house": "Green", "birthdate": "2011-06-13", "altName": "Anne"},
    {"name": "Tyler", "liveschoolName": "Tyler Xiang Li", "house": "Red", "birthdate": "2011-12-28", "altName": "Tyler"},
    {"name": "Ricky", "liveschoolName": "", "house": "", "birthdate": "", "altName": "Ricky"},
    {"name": "June", "liveschoolName": "June Ziqiao Qin", "house": "Blue", "birthdate": "2011-06-18", "altName": "June"},
    {"name": "Sophie", "liveschoolName": "Sophie Geng", "house": "Blue", "birthdate": "2012-05-14", "altName": "Sophie"},
    {"name": "Jesse", "liveschoolName": "", "house": "", "birthdate": "", "altName": "Jesse"},
    {"name": "Calvin Z", "liveschoolName": "Calvin Zihao Zhang", "house": "Blue", "birthdate": "2010-04-21", "altName": "Calvin Jong"},


    //all others
    {"name": "Hannah", "liveschoolName": "Hannah Ruihan Chen", "house": "Yellow", "birthdate": "2013-01-19", "altName": "Hannah"},
    {"name": "Andy", "liveschoolName": "Andy Xuanyu Feng", "house": "Green", "birthdate": "2012-01-13", "altName": "Andy"},
    {"name": "Aurora", "liveschoolName": "Aurora Yingxi Zhong", "house": "Yellow", "birthdate": "2013-02-27", "altName": "Aurora"},
    {"name": "Tiger", "liveschoolName": "Tiger Si Cheng Hou", "house": "Green", "birthdate": "2009-03-23", "altName": "Tiger"},
    {"name": "Steven", "liveschoolName": "Steven Siyuan Meng", "house": "Red", "birthdate": "2010-06-24", "altName": "Steven"},
    {"name": "Henry", "liveschoolName": "Henry Shi", "house": "Red", "birthdate": "2009-09-10", "altName": "Henry"},
    {"name": "Luna", "liveschoolName": "Luna Mingxi Zhan", "house": "Red", "birthdate": "2009-07-08", "altName": "Luna"},    
    {"name": "Jim", "liveschoolName": "Jim Zi Jing Zheng", "house": "Yellow", "birthdate": "2009-02-16", "altName": "Jimm"},
    {"name": "Owen", "liveschoolName": "Owen Qizhiyaun He", "house": "Green", "birthdate": "2012-11-30", "altName": "Owen"},
    {"name": "Daniel", "liveschoolName": "Daniel Tianyu He", "house": "Blue", "birthdate": "2009-09-04", "altName": "Daniel"},
    {"name": "Agu", "liveschoolName": "Agu Zi-Zhen Huang", "house": "Yellow", "birthdate": "2008-11-01", "altName": "Aagoo"},
    {"name": "Michael", "liveschoolName": "Michael Bao Shen Chen", "house": "Blue", "birthdate": "2008-12-25", "altName": "Michael"},
    {"name": "Kerry", "liveschoolName": "Kerry Liu", "house": "Green", "birthdate": "", "altName": "Kerry"},
    {"name": "Steve", "liveschoolName": "Steve Ruiming Zheng", "house": "Blue", "birthdate": "", "altName": "Steve"},
    {"name": "Ben", "liveschoolName": "Ben Luyue Chen", "house": "Yellow", "birthdate": "2007-12-17", "altName": "Ben"},
    {"name": "Kevin J", "liveschoolName": "Kevin Jincheng Jiao", "house": "Blue", "birthdate": "", "altName": "Kevin J"},
    {"name": "Mianmian", "liveschoolName": "Mianmian Mingxuan Lyu", "house": "Red", "birthdate": "2013-03-01", "altName": "Mienn Mienn"},
    {"name": "Karen", "liveschoolName": "Karen Hou", "house": "Blue", "birthdate": "2012-09-24", "altName": "Karen"},
    {"name": "LiPai", "liveschoolName": "Pai Li", "house": "Yellow", "birthdate": "", "altName": "LiPai"},
    {"name": "Alan Wen", "liveschoolName": "Alan Tianlin Wen", "house": "Yellow", "birthdate": "", "altName": "Alan"},
    {"name": "Ivan", "liveschoolName": "Ivan Yan Zhi Lin", "house": "Green", "birthdate": "", "altName": "Ivan"},
    {"name": "Allen Yu", "liveschoolName": "Allen Kwun Ting Yu", "house": "Yellow", "birthdate": "", "altName": "Allen"},
    {"name": "Alex", "liveschoolName": "Alex Tsz To Huang", "house": "Blue", "birthdate": "", "altName": "Alex"},
    {"name": "Emily", "liveschoolName": "Emily Xuan Tong Ke", "house": "Yellow", "birthdate": "", "altName": "Emily"},
    {"name": "Fiona", "liveschoolName": "Fiona Fang", "house": "Blue", "birthdate": "", "altName": "Fiona"},
    {"name": "Mandy", "liveschoolName": "Mandy Ming Luo", "house": "Green", "birthdate": "", "altName": "Mandy"},
    {"name": "Hubert", "liveschoolName": "Hubert Hongyi Chen", "house": "Yellow", "birthdate": "", "altName": "Hubert"},
    {"name": "Sebastian", "liveschoolName": "Sebastian Andresen", "house": "Yellow", "birthdate": "", "altName": "Sebastian"},
    {"name": "Esther", "liveschoolName": "Esther Sicong Chen", "house": "Green", "birthdate": "", "altName": "Esther"},
    {"name": "Christi", "liveschoolName": "Christi Yawen Zhu", "house": "Yellow", "birthdate": "", "altName": "Christi"},
    {"name": "Yaffa", "liveschoolName": "Yaffa Hei Wun Luo", "house": "Green", "birthdate": "", "altName": "Yaffa"},
    {"name": "Odelia", "liveschoolName": "Odelia Yunhan Xie", "house": "Green", "birthdate": "", "altName": "Odelia"},
];

const productionTechStudents = [
    'Fiona', 'Julius', 'Harry', 'Kevin', 'Bella', 'Allen', 'Cynthia', 'Yaffa', 'Rachelle', 'Beryl', 'Stella', 'Kenny', 'Ricky', 'Vlan', 'Sophie'
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

const productionTechTeacherModeOrder = ['Fiona', 'Julius', 'Harry', 'Kevin', 'Bella', 'Allen', 'Cynthia', 'Yaffa', 'Rachelle', 'Beryl', 'Stella', 'Kenny', 'Ricky', 'Vlan', 'Sophie'];


const productionTechSeniorProjects = ['Fiona', 'Julius', 'Harry', 'Kevin', 'Bella', 'Allen', 'Cynthia', 'Yaffa', 'Rachelle', 'Beryl', 'Stella', 'Kenny', 'Ricky', 'Vlan', 'Sophie']



const apMusicTheoryStudents = [
   'Simone', 'Thomas', 'Dora', 'Calvin', 'William', 'Jocelyn', 'Teresa'
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

const apMusicTheoryTeacherModeOrder = ['Simone', 'Thomas', 'Dora', 'Calvin', 'William', 'Jocelyn', 'Teresa'];


const apMusicTheorySeniorProjects = ['Simone', 'Thomas', 'Dora']



const msBandStudents = [
   'Anton', 'Jefferey', 'Jason', 'Stella S', 'Zachary', 'Rebecca', 'Shine', 'Kyla', 'Amanda', 'Austen', 'Rene', 'Ethan', 'Francis', 'Jacky', 'Matthew', 'Oscar', 'Grace X', 'Kyra', 'Nancy', 'Felix', 'Paris', 'Coco', 'Grant'
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

const msBandTeacherModeOrder = ['Anton', 'Jefferey', 'Jason', 'Stella S', 'Zachary', 'Rebecca', 'Shine', 'Kyla', 'Amanda', 'Austen', 'Rene', 'Ethan', 'Francis', 'Jacky', 'Matthew', 'Oscar', 'Grace X', 'Kyra', 'Nancy', 'Felix', 'Paris', 'Coco', 'Grant'];




const msBandThursdayStudents = [
    'Stella S', 'Zachary', 'Rebecca', 'Shine', 'Kyla', 'Amanda', 'Austen', 'Rene', 'Ethan', 'Francis', 'Jacky', 'Matthew', 'Oscar', 'Grace X', 'Kyra', 'Nancy', 'Felix', 'Paris', 'Coco', 'Grant'
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

const msBandThursdayTeacherModeOrder = ['Stella S', 'Zachary', 'Rebecca', 'Shine', 'Kyla', 'Amanda', 'Austen', 'Rene', 'Ethan', 'Francis', 'Jacky', 'Matthew', 'Oscar', 'Grace X', 'Kyra', 'Nancy', 'Felix', 'Paris', 'Coco', 'Grant'];





const hsBandStudents = [
    'Anne', 'Tyler', 'Ricky', 'June', 'Sophie', 'Jesse'
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

const hsBandTeacherModeOrder = ['Anne', 'Tyler', 'Ricky', 'June', 'Sophie', 'Jesse'];