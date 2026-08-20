const masterList = [
    //Tech Theater
    {"name": "Fiona", "liveschoolName": "Fiona Fangyuan Bi", "house": "Red", "birthdate": "", "altName": "Ffi-ona"},
    {"name": "Julius", "liveschoolName": "Julius Jinchen Che", "house": "Green", "birthdate": "", "altName": "Julius"},
    {"name": "Harry", "liveschoolName": "Harry Chak Hau Zhang", "house": "Yellow", "birthdate": "", "altName": "Harry"},
    {"name": "Kevin", "liveschoolName": "Kevin Haichen Zhao", "house": "Blue", "birthdate": "", "altName": "Kevin"},
    {"name": "Bella", "liveschoolName": "Bella Yufei Bi", "house": "Yellow", "birthdate": "", "altName": "Bella"},
    {"name": "Allen", "liveschoolName": "Allen He", "house": "Red", "birthdate": "", "altName": "Allen"},
    {"name": "Yolanda", "liveschoolName": "Yolanda Yuqian Li", "house": "Red", "birthdate": "", "altName": "Yolawnda"},
    {"name": "Cynthia", "liveschoolName": "Cynthia Sum Chi Liaw", "house": "Green", "birthdate": "", "altName": "Cynthia"},
    {"name": "Yaffa", "liveschoolName": "Yaffa Hei Wun Luo", "house": "Green", "birthdate": "", "altName": "Yaffa"},
    {"name": "Aaliyah", "liveschoolName": "Aaliyah Hairuo Zhang", "house": "Yellow", "birthdate": "", "altName": "Aaliyah"},
    {"name": "Rachelle", "liveschoolName": "Rachelle Xinxin Zhang", "house": "Yellow", "birthdate": "", "altName": "Raciale"},
    {"name": "Beryl", "liveschoolName": "Tina Yantong Dong", "house": "Blue", "birthdate": "", "altName": "Barrel"},
    {"name": "Stella L", "liveschoolName": "Stella Yuxuan Li", "house": "Green", "birthdate": "", "altName": "Stella"},
    {"name": "Kenny", "liveschoolName": "Kenny Yuan Wang", "house": "Green", "birthdate": "", "altName": "Kenny"},
    {"name": "Ricky C", "liveschoolName": "Ricky Ruiqi Chen", "house": "Green", "birthdate": "", "altName": "Ricky C"},
    {"name": "Vlan", "liveschoolName": "Vlan Wai Lun Dong", "house": "Green", "birthdate": "", "altName": "Vlan"},
    {"name": "Annie", "liveschoolName": "Annie Huiling Liu", "house": "Red", "birthdate": "", "altName": "Annie"},
    {"name": "Sophie Z", "liveschoolName": "Sophie Zhijia Zhuang", "house": "Yellow", "birthdate": "", "altName": "Sophie"},
    {"name": "Ricky Z", "liveschoolName": "Ricky Zong", "house": "Blue", "birthdate": "", "altName": "Ricky Z"},

    //AP Music Theory
    {"name": "Jocelyn", "liveschoolName": "Jocelyn Lan Bai", "house": "Blue", "birthdate": "", "altName": "Jocelyn"},
    {"name": "Maggie", "liveschoolName": "Maggie Gan", "house": "Red", "birthdate": "", "altName": "Maggie"},
    {"name": "Teresa", "liveschoolName": "Teresa Mingxun Jiang", "house": "Green", "birthdate": "", "altName": "Teresa"},
    {"name": "Thomas", "liveschoolName": "Thomas Hongyi Long", "house": "Red", "birthdate": "", "altName": "Thomas"},
    {"name": "Calvin", "liveschoolName": "Calvin Zihao Zhang", "house": "Blue", "birthdate": "", "altName": "Calvin", "instrumentPart": "Tuba"},
    {"name": "William", "liveschoolName": "William Zhiwen Zheng", "house": "Yellow", "birthdate": "", "altName": "William"},
    
    //MS Band
    {"name": "Anton", "liveschoolName": "Anton Jiayu Ding", "house": "Green", "birthdate": "", "altName": "Anton", "instrumentPart": "Trumpet", "chair": "3"},
    {"name": "Jefferey", "liveschoolName": "Jeffrey Nie", "house": "Blue", "birthdate": "", "altName": "Jefferey", "instrumentPart": "Alto Sax", "chair": "3"},
    {"name": "Jason", "liveschoolName": "Jason Junfeng Shen", "house": "Red", "birthdate": "", "altName": "Jason", "instrumentPart": "Flute", "chair": "4"},
    {"name": "Daniel D", "liveschoolName": "Daniel Zeyang Dou", "house": "Blue", "birthdate": "", "altName": "Daniel", "instrumentPart": "Trumpet", "chair": "5"},
    {"name": "Stella S", "liveschoolName": "Stella Yizhi Shang", "house": "Green", "birthdate": "2012-02-29", "altName": "Stella", "instrumentPart": "Cello", "chair": "1"},
    {"name": "Zachary", "liveschoolName": "Zachary Yang", "house": "Green", "birthdate": "2012-12-29", "altName": "Zachary", "instrumentPart": "Trumpet", "chair": "2"},
    {"name": "Rebecca", "liveschoolName": "Rebecca Tsz Yin Cheung", "house": "Blue", "birthdate": "2012-05-28", "altName": "Rebecca", "instrumentPart": "Violin", "chair": "4"},
    {"name": "Shine", "liveschoolName": "Shine Yu Duan", "house": "Blue", "birthdate": "2013-02-14", "altName": "Shine", "instrumentPart": "Violin", "chair": "2"},
    {"name": "Kyla", "liveschoolName": "Kyla Shi", "house": "Red", "birthdate": "2013-03-25", "altName": "Kyla", "instrumentPart": "Cello", "chair": "2"},
    {"name": "Amanda", "liveschoolName": "Amanda Seoah Song", "house": "Green", "birthdate": "", "altName": "Amanda", "instrumentPart": "Percussion", "chair": "3"},
    {"name": "Austen", "liveschoolName": "Austen Lihan Xie", "house": "Yellow", "birthdate": "2013-01-02", "altName": "Austen", "instrumentPart": "Cello", "chair": "5"},
    {"name": "Rene", "liveschoolName": "Rene King Hei Tang", "house": "Red", "birthdate": "2013-03-28", "altName": "Rene", "instrumentPart": "Contrabass", "chair": "2"},
    {"name": "Ethan", "liveschoolName": "Ethan Tsz Ip Zhang", "house": "Blue", "birthdate": "", "altName": "Ethan", "instrumentPart": "Trumpet", "chair": "3"},
    {"name": "Francis", "liveschoolName": "Francis Liu", "house": "Blue", "birthdate": "2013-01-31", "altName": "Francis", "instrumentPart": "Alto Sax", "chair": "2"},
    {"name": "Jacky", "liveschoolName": "Jacky Tsz Hin Cheung", "house": "Green", "birthdate": "2014-08-30", "altName": "Jacky", "instrumentPart": "Violin", "chair": "5"},
    {"name": "Matthew", "liveschoolName": "Matthew Enhao Feng", "house": "Yellow", "birthdate": "2013-12-16", "altName": "Matthew", "instrumentPart": "Violin", "chair": "7"},
    {"name": "Oscar", "liveschoolName": "Oscar Xinchen Fang", "house": "Red", "birthdate": "2013-03-20", "altName": "Oscar", "instrumentPart": "Violin", "chair": "3"},
    {"name": "Kyra", "liveschoolName": "Kyra Jiaqi Yan", "house": "Yellow", "birthdate": "", "altName": "Kira", "instrumentPart": "Viola", "chair": "2"},
    {"name": "Felix", "liveschoolName": "Felix Jiaxi Hong", "house": "Blue", "birthdate": "", "altName": "Felix", "instrumentPart": "Cello", "chair": "6"},
    {"name": "Paris", "liveschoolName": "Paris Shiyu Liang", "house": "Blue", "birthdate": "", "altName": "Paris", "instrumentPart": "Flute", "chair": "3"},
    {"name": "Coco", "liveschoolName": "Coco Yuguo Luo", "house": "Yellow", "birthdate": "", "altName": "Coco", "instrumentPart": "Viola", "chair": "2"},
    {"name": "Grant", "liveschoolName": "Grant Zhang", "house": "Green", "birthdate": "2014-02-11", "altName": "Grant", "instrumentPart": "Violin", "chair": "6"},

    //HS Band
    {"name": "Anne", "liveschoolName": "Anne Jiayue An", "house": "Green", "birthdate": "2011-06-13", "altName": "Anne", "instrumentPart": "Trumpet", "chair": "4"},
    {"name": "Sophie G", "liveschoolName": "Sophie Geng", "house": "Blue", "birthdate": "2012-05-14", "altName": "Sophie", "instrumentPart": "Horn", "chair": "2"},
    {"name": "Tyler", "liveschoolName": "Tyler Xiang Li", "house": "Red", "birthdate": "2011-12-28", "altName": "Tyler", "instrumentPart": "Clarinet", "chair": "4"},
    {"name": "Kerry", "liveschoolName": "Kerry Liu", "house": "Green", "birthdate": "", "altName": "Kerry", "instrumentPart": "Flute", "chair": "1"},
    {"name": "Ricky L", "liveschoolName": "Ricky Ruiqi Lu", "house": "Green", "birthdate": "", "altName": "Ricky", "instrumentPart": "Percussion", "chair": "99"},
    {"name": "Steven", "liveschoolName": "Steven Siyuan Meng", "house": "Red", "birthdate": "2010-06-24", "altName": "Steven", "instrumentPart": "Baritone", "chair": "1"},
    {"name": "June", "liveschoolName": "June Ziqiao Qin", "house": "Blue", "birthdate": "2011-06-18", "altName": "June", "instrumentPart": "Flute", "chair": "3"},
    {"name": "Jesse", "liveschoolName": "Jesse Junxi Zeng", "house": "Blue", "birthdate": "", "altName": "Jesse", "instrumentPart": "Percussion", "chair": "99"},

    //all others
    {"name": "Grace", "liveschoolName": "Grace Leqi Xiong", "house": "Red", "birthdate": "2013-01-19", "altName": "Grace", "instrumentPart": "Violin3", "chair": "5"},
    {"name": "Nancy", "liveschoolName": "Nancy Han", "house": "Yellow", "birthdate": "2013-07-16", "altName": "Nancy", "instrumentPart": "Violin3", "chair": "4"},
    {"name": "Hannah", "liveschoolName": "Hannah Ruihan Chen", "house": "Yellow", "birthdate": "2013-01-19", "altName": "Hannah", "instrumentPart": "Clarinet", "chair": "7"},
    {"name": "Andy", "liveschoolName": "Andy Xuanyu Feng", "house": "Green", "birthdate": "2012-01-13", "altName": "Andy", "instrumentPart": "Violin2", "chair": "3"},
    {"name": "Aurora", "liveschoolName": "Aurora Yingxi Zhong", "house": "Yellow", "birthdate": "2013-02-27", "altName": "Aurora", "instrumentPart": "Percussion", "chair": "3"},
    {"name": "Tiger", "liveschoolName": "Tiger Si Cheng Hou", "house": "Green", "birthdate": "2009-03-23", "altName": "Tiger", "instrumentPart": "Percussion", "chair": "2"},
    {"name": "Henry", "liveschoolName": "Henry Shi", "house": "Red", "birthdate": "2009-09-10", "altName": "Henry", "instrumentPart": "Clarinet", "chair": "1"},
    {"name": "Luna", "liveschoolName": "Luna Mingxi Zhan", "house": "Red", "birthdate": "2009-07-08", "altName": "Luna", "instrumentPart": "Contrabass", "chair": "1"},
    {"name": "Jim", "liveschoolName": "Jim Zi Jing Zheng", "house": "Yellow", "birthdate": "2009-02-16", "altName": "Jimm", "instrumentPart": "Clarinet", "chair": "2"},
    {"name": "Owen", "liveschoolName": "Owen Qizhiyaun He", "house": "Green", "birthdate": "2012-11-30", "altName": "Owen", "instrumentPart": "Trumpet", "chair": "3"},
    {"name": "Daniel H", "liveschoolName": "Daniel Tianyu He", "house": "Blue", "birthdate": "2009-09-04", "altName": "Daniel", "instrumentPart": "Trombone", "chair": "1"},
    {"name": "Agu", "liveschoolName": "Agu Zi-Zhen Huang", "house": "Yellow", "birthdate": "2008-11-01", "altName": "Aagoo", "instrumentPart": "Alto Sax", "chair": "3"},
    {"name": "Michael", "liveschoolName": "Michael Bao Shen Chen", "house": "Blue", "birthdate": "2008-12-25", "altName": "Michael", "instrumentPart": "Alto Sax", "chair": "4"},
    {"name": "Steve", "liveschoolName": "Steve Ruiming Zheng", "house": "Blue", "birthdate": "", "altName": "Steve", "instrumentPart": "Bass Clarinet", "chair": "3"},
    {"name": "Ben", "liveschoolName": "Ben Luyue Chen", "house": "Yellow", "birthdate": "2007-12-17", "altName": "Ben", "instrumentPart": "Percussion", "chair": "4"},
    {"name": "Kevin J", "liveschoolName": "Kevin Jincheng Jiao", "house": "Blue", "birthdate": "", "altName": "Kevin J", "instrumentPart": "Bass Clarinet", "chair": "1"},
    {"name": "Mianmian", "liveschoolName": "Mianmian Mingxuan Lyu", "house": "Red", "birthdate": "2013-03-01", "altName": "Mienn Mienn", "instrumentPart": "Flute", "chair": "3"},
    {"name": "Karen", "liveschoolName": "Karen Hou", "house": "Blue", "birthdate": "2012-09-24", "altName": "Karen", "instrumentPart": "Flute", "chair": "4"},
    {"name": "LiPai", "liveschoolName": "Pai Li", "house": "Yellow", "birthdate": "", "altName": "LiPai", "instrumentPart": "Cello2", "chair": "4"},
    {"name": "Alan Wen", "liveschoolName": "Alan Tianlin Wen", "house": "Yellow", "birthdate": "", "altName": "Alan", "instrumentPart": "Flute", "chair": "2"},
    {"name": "Ivan", "liveschoolName": "Ivan Yan Zhi Lin", "house": "Green", "birthdate": "", "altName": "Ivan", "instrumentPart": "Percussion", "chair": "1"},
    {"name": "Allen Yu", "liveschoolName": "Allen Kwun Ting Yu", "house": "Yellow", "birthdate": "", "altName": "Allen", "instrumentPart": "Violin2", "chair": "3"},
    {"name": "Alex", "liveschoolName": "Alex Tsz To Huang", "house": "Blue", "birthdate": "", "altName": "Alex", "instrumentPart": "Violin1", "chair": "1"},
    {"name": "Emily", "liveschoolName": "Emily Xuan Tong Ke", "house": "Yellow", "birthdate": "", "altName": "Emily", "instrumentPart": "Violin2", "chair": "1"},
    {"name": "Fiona", "liveschoolName": "Fiona Fang", "house": "Blue", "birthdate": "", "altName": "Fiona", "instrumentPart": "Violin3", "chair": "4"},
    {"name": "Mandy", "liveschoolName": "Mandy Ming Luo", "house": "Green", "birthdate": "", "altName": "Mandy", "instrumentPart": "Cello2", "chair": "4"},
    {"name": "Hubert", "liveschoolName": "Hubert Hongyi Chen", "house": "Yellow", "birthdate": "", "altName": "Hubert", "instrumentPart": "Cello2", "chair": "4"},
    {"name": "Sebastian", "liveschoolName": "Sebastian Andresen", "house": "Yellow", "birthdate": "", "altName": "Sebastian", "instrumentPart": "Percussion", "chair": "5"},
    {"name": "Esther", "liveschoolName": "Esther Sicong Chen", "house": "Green", "birthdate": "", "altName": "Esther", "instrumentPart": "Percussion", "chair": "6"},
    {"name": "Christi", "liveschoolName": "Christi Yawen Zhu", "house": "Yellow", "birthdate": "", "altName": "Christi", "instrumentPart": "Horn", "chair": "1"},
    {"name": "Odelia", "liveschoolName": "Odelia Yunhan Xie", "house": "Green", "birthdate": "", "altName": "Odelia", "instrumentPart": "Violin3", "chair": "3"},
];

const techTheaterStudents = [
    'Fiona', 'Julius', 'Harry', 'Kevin', 'Bella', 'Allen', 'Yolanda', 'Cynthia', 'Yaffa', 'Aaliyah', 'Rachelle', 'Beryl', 'Stella', 'Kenny', 'Ricky C', 'Vlan', 'Annie', 'Sophie', 'Ricky Z'
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

const techTheaterTeacherModeOrder = ['Fiona', 'Julius', 'Harry', 'Kevin', 'Bella', 'Allen', 'Yolanda', 'Cynthia', 'Yaffa', 'Aaliyah', 'Rachelle', 'Beryl', 'Stella', 'Kenny', 'Ricky C', 'Vlan', 'Annie', 'Sophie', 'Ricky Z'];


const techTheaterSeniorProjects = ['Fiona', 'Julius', 'Harry', 'Kevin', 'Bella', 'Allen', 'Yolanda', 'Cynthia', 'Yaffa', 'Aaliyah', 'Rachelle', 'Beryl', 'Stella', 'Kenny', 'Ricky C', 'Vlan', 'Annie', 'Sophie', 'Ricky Z']



const apMusicTheoryStudents = [
   'Jocelyn', 'Maggie', 'Teresa', 'Thomas','Calvin', 'William', 
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

const apMusicTheoryTeacherModeOrder = ['Jocelyn', 'Maggie', 'Teresa', 'Thomas','Calvin', 'William', ];


const apMusicTheorySeniorProjects = ['Thomas']



const msBandStudents = [
   'Anton', 'Jefferey', 'Jason', 'Daniel D', 'Stella S', 'Zachary', 'Rebecca', 'Shine', 'Kyla', 'Amanda', 'Austen', 'Rene', 'Ethan', 'Francis', 'Jacky', 'Matthew', 'Oscar', 'Kyra', 'Felix', 'Paris', 'Coco', 'Grant'
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

const msBandTeacherModeOrder = ['Anton', 'Jefferey', 'Jason', 'Daniel D', 'Stella S', 'Zachary', 'Rebecca', 'Shine', 'Kyla', 'Amanda', 'Austen', 'Rene', 'Ethan', 'Francis', 'Jacky', 'Matthew', 'Oscar', 'Kyra', 'Felix', 'Paris', 'Coco', 'Grant'];




const msBandThursdayStudents = [
    'Stella S', 'Zachary', 'Rebecca', 'Shine', 'Kyla', 'Amanda', 'Austen', 'Rene', 'Ethan', 'Francis', 'Jacky', 'Matthew', 'Oscar', 'Kyra', 'Felix', 'Paris', 'Coco', 'Grant'
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

const msBandThursdayTeacherModeOrder = ['Stella S', 'Zachary', 'Rebecca', 'Shine', 'Kyla', 'Amanda', 'Austen', 'Rene', 'Ethan', 'Francis', 'Jacky', 'Matthew', 'Oscar', 'Kyra', 'Felix', 'Paris', 'Coco', 'Grant'];





const hsBandStudents = [
    'Anne', 'Sophie G', 'Tyler', 'Kerry', 'Ricky L', 'Steven', 'June', 'Jesse'
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

const hsBandTeacherModeOrder = ['Anne', 'Sophie G', 'Tyler', 'Kerry', 'Ricky L', 'Steven', 'June', 'Jesse'];