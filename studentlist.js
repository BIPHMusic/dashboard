const masterList = [
    //Tech Theater
    {"name": "Fiona", "liveschoolName": "Fiona Fangyuan Bi", "house": "Red", "birthdate": "", "altName": "Ffi-ona", "addable": "no"},
    {"name": "Julius", "liveschoolName": "Julius Jinchen Che", "house": "Green", "birthdate": "", "altName": "Julius", "addable": "no"},
    {"name": "Vlan", "liveschoolName": "Vlan Wai Lun Dong", "house": "Green", "birthdate": "", "altName": "Vlan", "addable": "no"},
    {"name": "Beryl", "liveschoolName": "Tina Yantong Dong", "house": "Blue", "birthdate": "", "altName": "Barrel", "addable": "no"},
    {"name": "Allen", "liveschoolName": "Allen He", "house": "Red", "birthdate": "", "altName": "Allen", "addable": "no"},
    {"name": "Yolanda", "liveschoolName": "Yolanda Yuqian Li", "house": "Red", "birthdate": "", "altName": "Yolawnda", "addable": "no"},
    {"name": "Stella", "liveschoolName": "Stella Yuxuan Li", "house": "Green", "birthdate": "", "altName": "Stella", "addable": "no"},
    {"name": "Cynthia", "liveschoolName": "Cynthia Sum Chi Liaw", "house": "Green", "birthdate": "", "altName": "Cynthia", "addable": "no"},
    {"name": "Yaffa", "liveschoolName": "Yaffa Hei Wun Luo", "house": "Green", "birthdate": "", "altName": "Yaffa", "addable": "yes"},
    {"name": "Kenny", "liveschoolName": "Kenny Yuan Wang", "house": "Green", "birthdate": "", "altName": "Kenny", "addable": "no"},
    {"name": "Harry", "liveschoolName": "Harry Chak Hau Zhang", "house": "Yellow", "birthdate": "", "altName": "Harry", "addable": "no"},
    {"name": "Aaliyah", "liveschoolName": "Aaliyah Hairuo Zhang", "house": "Yellow", "birthdate": "", "altName": "Aaliyah", "addable": "no"},
    {"name": "Rachelle", "liveschoolName": "Rachelle Xinxin Zhang", "house": "Yellow", "birthdate": "", "altName": "Raciale", "addable": "no"},
    {"name": "Kevin", "liveschoolName": "Kevin Haichen Zhao", "house": "Blue", "birthdate": "", "altName": "Kevin", "addable": "no"},
    {"name": "Sophie", "liveschoolName": "Sophie Zhijia Zhuang", "house": "Yellow", "birthdate": "", "altName": "Sophie", "addable": "no"},
    {"name": "Ricky Z", "liveschoolName": "Ricky Zong", "house": "Blue", "birthdate": "", "altName": "Ricky Z", "addable": "no"},
    {"name": "Eric", "liveschoolName": "Eric Yiru Zeng", "house": "Green", "birthdate": "", "altName": "Eric", "addable": "no"},

    //AE
    {"name": "Shawn", "liveschoolName": "Shawn Chengkun Bi", "house": "Red", "birthdate": "", "altName": "Shawn", "addable": "no"},
    {"name": "Sisi", "liveschoolName": "Arianna Sisi Chen", "house": "Green", "birthdate": "", "altName": "Arianna", "addable": "no"},
    {"name": "Bella", "liveschoolName": "Bella Yaxi Chen", "house": "Red", "birthdate": "", "altName": "Bella", "addable": "no"},
    {"name": "Rebecca", "liveschoolName": "Rebecca Tsz Yin Cheung", "house": "Blue", "birthdate": "", "altName": "Rebecca", "addable": "no"},
    {"name": "Shine", "liveschoolName": "Shine Yu Duan", "house": "Blue", "birthdate": "", "altName": "Shine", "addable": "no"},
    {"name": "Jonathan", "liveschoolName": "", "house": "Blue", "birthdate": "", "altName": "Jonathan", "addable": "no"},
    {"name": "Olivia", "liveschoolName": "", "house": "Yellow", "birthdate": "", "altName": "Olivia", "addable": "no"},
    {"name": "Kim", "liveschoolName": "", "house": "Blue", "birthdate": "", "altName": "Kim", "addable": "no"},
    {"name": "Phyllis", "liveschoolName": "", "house": "Red", "birthdate": "", "altName": "Phyllis", "addable": "no"},
    {"name": "Laura", "liveschoolName": "", "house": "Yellow", "birthdate": "", "altName": "Laura", "addable": "no"},
    {"name": "Andy", "liveschoolName": "", "house": "Yellow", "birthdate": "", "altName": "Andy", "addable": "no"},
    {"name": "Kyla", "liveschoolName": "Kyla Shi", "house": "Red", "birthdate": "", "altName": "Kyla", "addable": "no"},
    {"name": "Amanda", "liveschoolName": "Amanda Seoah Song", "house": "Green", "birthdate": "", "altName": "Amanda", "addable": "no"},
    {"name": "Damon", "liveschoolName": "", "house": "Green", "birthdate": "", "altName": "Damon", "addable": "no"},
    {"name": "Daisy", "liveschoolName": "", "house": "Red", "birthdate": "", "altName": "Daisy", "addable": "no"},
    {"name": "Austen", "liveschoolName": "Austen Lihan Xie", "house": "Yellow", "birthdate": "", "altName": "Austen", "addable": "no"},
    {"name": "Elon", "liveschoolName": "", "house": "Green", "birthdate": "", "altName": "Elon", "addable": "no"},
    {"name": "Eva", "liveschoolName": "", "house": "Blue", "birthdate": "", "altName": "Eva", "addable": "no"},
    {"name": "William", "liveschoolName": "", "house": "Green", "birthdate": "", "altName": "William", "addable": "no"},
    {"name": "Molly", "liveschoolName": "", "house": "Green", "birthdate": "", "altName": "Molly", "addable": "no"},
    {"name": "Lucky", "liveschoolName": "", "house": "Green", "birthdate": "", "altName": "Lucky", "addable": "no"},
    {"name": "Jerry", "liveschoolName": "", "house": "Red", "birthdate": "", "altName": "Jerry", "addable": "no"},
    {"name": "Bob", "liveschoolName": "", "house": "Yellow", "birthdate": "", "altName": "Bob", "addable": "no"},

    //AP Music Theory
    {"name": "Thomas", "liveschoolName": "Thomas Hongyi Long", "house": "Red", "birthdate": "", "altName": "Thomas", "addable": "no"},
    {"name": "Calvin", "liveschoolName": "Calvin Zihao Zhang", "house": "Blue", "birthdate": "", "altName": "Calvin", "addable": "no"},
    {"name": "William", "liveschoolName": "William Zhiwen Zheng", "house": "Yellow", "birthdate": "", "altName": "William", "addable": "no"},
    {"name": "Jocelyn", "liveschoolName": "Jocelyn Lan Bai", "house": "Blue", "birthdate": "", "altName": "Jocelyn", "addable": "no"},
    {"name": "Maggie", "liveschoolName": "Maggie Gan", "house": "Red", "birthdate": "", "altName": "Maggie", "addable": "no"},
    {"name": "Teresa", "liveschoolName": "Teresa Mingxun Jiang", "house": "Green", "birthdate": "", "altName": "Teresa", "addable": "no"},
    
    //MS Band
    {"name": "Anton", "liveschoolName": "Anton Jiayu Ding", "house": "Green", "birthdate": "", "altName": "Anton", "instrumentPart": "Trumpet", "chair": "3"},
    {"name": "Jefferey", "liveschoolName": "Jeffrey Nie", "house": "Blue", "birthdate": "", "altName": "Jefferey", "instrumentPart": "Alto Sax", "chair": "3"},
    {"name": "Jason", "liveschoolName": "Jason Junfeng Shen", "house": "Red", "birthdate": "", "altName": "Jason", "instrumentPart": "Flute", "chair": "4"},
    {"name": "Daniel D", "liveschoolName": "Daniel Zeyang Dou", "house": "Blue", "birthdate": "", "altName": "Daniel", "instrumentPart": "Trumpet", "chair": "5"},
    {"name": "Stella S", "liveschoolName": "Stella Yizhi Shang", "house": "Green", "birthdate": "2012-02-29", "altName": "Stella", "instrumentPart": "Cello1", "chair": "1"},
    {"name": "Zachary", "liveschoolName": "Zachary Yang", "house": "Green", "birthdate": "2012-12-29", "altName": "Zachary", "instrumentPart": "Trumpet", "chair": "2"},
    {"name": "Rebecca", "liveschoolName": "Rebecca Tsz Yin Cheung", "house": "Blue", "birthdate": "2012-05-28", "altName": "Rebecca", "instrumentPart": "Violin1", "chair": "4"},
    {"name": "Shine", "liveschoolName": "Shine Yu Duan", "house": "Blue", "birthdate": "2013-02-14", "altName": "Shine", "instrumentPart": "Violin1", "chair": "2"},
    {"name": "Kyla", "liveschoolName": "Kyla Shi", "house": "Red", "birthdate": "2013-03-25", "altName": "Kyla", "instrumentPart": "Cello1", "chair": "2"},
    {"name": "Amanda", "liveschoolName": "Amanda Seoah Song", "house": "Green", "birthdate": "", "altName": "Amanda", "instrumentPart": "Percussion", "chair": "3"},
    {"name": "Austen", "liveschoolName": "Austen Lihan Xie", "house": "Yellow", "birthdate": "2013-01-02", "altName": "Austen", "instrumentPart": "Cello2", "chair": "5"},
    {"name": "Rene", "liveschoolName": "Rene King Hei Tang", "house": "Red", "birthdate": "2013-03-28", "altName": "Rene", "instrumentPart": "Contrabass", "chair": "2"},
    {"name": "Ethan", "liveschoolName": "Ethan Tsz Ip Zhang", "house": "Blue", "birthdate": "", "altName": "Ethan", "instrumentPart": "Trumpet", "chair": "3"},
    {"name": "Francis", "liveschoolName": "Francis Liu", "house": "Blue", "birthdate": "2013-01-31", "altName": "Francis", "instrumentPart": "Alto Sax", "chair": "2"},
    {"name": "Jacky", "liveschoolName": "Jacky Tsz Hin Cheung", "house": "Green", "birthdate": "2014-08-30", "altName": "Jacky", "instrumentPart": "Violin2", "chair": "5"},
    {"name": "Matthew", "liveschoolName": "Matthew Enhao Feng", "house": "Yellow", "birthdate": "2013-12-16", "altName": "Matthew", "instrumentPart": "Violin2", "chair": "7"},
    {"name": "Oscar", "liveschoolName": "Oscar Xinchen Fang", "house": "Red", "birthdate": "2013-03-20", "altName": "Oscar", "instrumentPart": "Violin1", "chair": "3"},
    {"name": "Kyra", "liveschoolName": "Kyra Jiaqi Yan", "house": "Yellow", "birthdate": "", "altName": "Kira", "instrumentPart": "Viola", "chair": "2"},
    {"name": "Felix", "liveschoolName": "Felix Jiaxi Hong", "house": "Blue", "birthdate": "", "altName": "Felix", "instrumentPart": "Cello2", "chair": "6"},
    {"name": "Paris", "liveschoolName": "Paris Shiyu Liang", "house": "Blue", "birthdate": "", "altName": "Paris", "instrumentPart": "Flute", "chair": "3"},
    {"name": "Coco", "liveschoolName": "Coco Yuguo Luo", "house": "Yellow", "birthdate": "", "altName": "Coco", "instrumentPart": "Viola", "chair": "2"},
    {"name": "Grant", "liveschoolName": "Grant Zhang", "house": "Green", "birthdate": "2014-02-11", "altName": "Grant", "instrumentPart": "Violin2", "chair": "6"},

    //HS Band
    {"name": "Kerry", "liveschoolName": "Kerry Liu", "house": "Green", "birthdate": "", "altName": "Kerry", "instrumentPart": "Flute", "chair": "1"},
    {"name": "Calvin", "liveschoolName": "Calvin Zihao Zhang", "house": "Blue", "birthdate": "", "altName": "Calvin", "instrumentPart": "Tuba", "chair": "1"},
    {"name": "Steven", "liveschoolName": "Steven Siyuan Meng", "house": "Red", "birthdate": "", "altName": "Steven", "instrumentPart": "Baritone", "chair": "1"},
    {"name": "Anne", "liveschoolName": "Anne Jiayue An", "house": "Green", "birthdate": "", "altName": "Anne", "instrumentPart": "Trumpet", "chair": "3"},
    {"name": "Tyler", "liveschoolName": "Tyler Xiang Li", "house": "Red", "birthdate": "", "altName": "Tyler", "instrumentPart": "Clarinet", "chair": "3"},
    {"name": "June", "liveschoolName": "June Ziqiao Qin", "house": "Blue", "birthdate": "", "altName": "June", "instrumentPart": "Flute", "chair": "3"},
    {"name": "Sophie", "liveschoolName": "Sophie Geng", "house": "Blue", "birthdate": "", "altName": "Sophie", "instrumentPart": "Horn", "chair": "2"},
    {"name": "Jesse", "liveschoolName": "Jesse Junxi Zeng", "house": "Blue", "birthdate": "", "altName": "Jesse", "instrumentPart": "Percussion", "chair": "2"},

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
    'Fiona', 'Julius', 'Vlan', 'Beryl', 'Allen', 'Yolanda', 'Stella', 'Cynthia', 'Yaffa', 'Kenny', 'Harry', 'Aaliyah', 'Rachelle', 'Kevin', 'Sophie', 'Ricky Z', 'Eric'
].map(name => {
    const studentInfo = masterList.find(s => s.name === name);
    return {
        name,
        birthdate: studentInfo ? studentInfo.birthdate : null,
        score: 'EX',
        attendance: 'Absent',
        devices: false,
        engagement: false,
        review: false,
        progress: false,
        housePoints: 0
    };
});

const techTheaterTeacherModeOrder = ['Fiona', 'Julius', 'Vlan', 'Beryl', 'Allen', 'Yolanda', 'Stella', 'Cynthia', 'Yaffa', 'Kenny', 'Harry', 'Aaliyah', 'Rachelle', 'Kevin', 'Sophie', 'Ricky Z', 'Eric'];


const techTheaterSeniorProjects = ['Fiona', 'Julius', 'Vlan', 'Beryl', 'Allen', 'Yolanda', 'Stella', 'Cynthia', 'Yaffa', 'Kenny', 'Harry', 'Aaliyah', 'Rachelle', 'Kevin', 'Sophie', 'Ricky Z', 'Eric']



const aeStudents = [
    'Shawn', 'Sisi', 'Bella', 'Rebecca', 'Shine', 'Jonathan', 'Olivia', 'Kim', 'Phyllis', 'Laura', 'Andy', 'Kyla', 'Amanda', 'Damon', 'Daisy', 'Austen', 'Elon', 'Eva', 'William', 'Molly', 'Lucky', 'Jerry', 'Bob'
].map(name => {
    const studentInfo = masterList.find(s => s.name === name);
    return {
        name,
        birthdate: studentInfo ? studentInfo.birthdate : null,
        score: 'EX',
        attendance: 'Absent',
        devices: false,
        engagement: false,
        review: false,
        progress: false,
        housePoints: 0
    };
});

const aeTeacherModeOrder = ['Shawn', 'Sisi', 'Bella', 'Rebecca', 'Shine', 'Jonathan', 'Olivia', 'Kim', 'Phyllis', 'Laura', 'Andy', 'Kyla', 'Amanda', 'Damon', 'Daisy', 'Austen', 'Elon', 'Eva', 'William', 'Molly', 'Lucky', 'Jerry', 'Bob'];




const apMusicTheoryStudents = [
   'Jocelyn', 'Maggie', 'Teresa', 'Thomas','Calvin', 'William', 
].map(name => {
    const studentInfo = masterList.find(s => s.name === name);
    return {
        name,
        birthdate: studentInfo ? studentInfo.birthdate : null,
        score: 'EX',
        attendance: 'Absent',
        devices: false,
        engagement: false,
        review: false,
        progress: false,
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
    'Kerry', 'Calvin', 'Steven', 'Anne', 'Tyler', 'June', 'Sophie', 'Jesse'
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

const hsBandTeacherModeOrder = ['Kerry', 'Calvin', 'Steven', 'Anne', 'Tyler', 'June', 'Sophie', 'Jesse'];