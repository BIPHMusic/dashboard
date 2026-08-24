const masterList = [
    //Tech Theater
    {"name": "Fiona", "liveschoolName": "Fiona Fangyuan Bi", "house": "Red", "birthdate": "", "altName": "Ffi-ona", "class": "Tech Theater", "addable": "no"},
    {"name": "Julius", "liveschoolName": "Julius Jinchen Che", "house": "Green", "birthdate": "", "altName": "Julius", "class": "Tech Theater", "addable": "no"},
    {"name": "Vlan", "liveschoolName": "Vlan Wai Lun Dong", "house": "Green", "birthdate": "", "altName": "Vlan", "class": "Tech Theater", "addable": "no"},
    {"name": "Beryl", "liveschoolName": "Tina Yantong Dong", "house": "Blue", "birthdate": "", "altName": "Barrel", "class": "Tech Theater", "addable": "no"},
    {"name": "Allen", "liveschoolName": "Allen He", "house": "Red", "birthdate": "", "altName": "Allen", "class": "Tech Theater", "addable": "no"},
    {"name": "Yolanda", "liveschoolName": "Yolanda Yuqian Li", "house": "Red", "birthdate": "", "altName": "Yolawnda", "class": "Tech Theater", "addable": "no"},
    {"name": "Stella", "liveschoolName": "Stella Yuxuan Li", "house": "Green", "birthdate": "", "altName": "Stella", "class": "Tech Theater", "addable": "no"},
    {"name": "Cynthia", "liveschoolName": "Cynthia Sum Chi Liaw", "house": "Green", "birthdate": "", "altName": "Cynthia", "class": "Tech Theater", "addable": "no"},
    {"name": "Yaffa", "liveschoolName": "Yaffa Hei Wun Luo", "house": "Green", "birthdate": "", "altName": "Yaffa", "class": "Tech Theater", "addable": "yes"},
    {"name": "Kenny", "liveschoolName": "Kenny Yuan Wang", "house": "Green", "birthdate": "", "altName": "Kenny", "class": "Tech Theater", "addable": "no"},
    {"name": "Harry", "liveschoolName": "Harry Chak Hau Zhang", "house": "Yellow", "birthdate": "", "altName": "Harry", "class": "Tech Theater", "addable": "no"},
    {"name": "Aaliyah", "liveschoolName": "Aaliyah Hairuo Zhang", "house": "Yellow", "birthdate": "", "altName": "Aaliyah", "class": "Tech Theater", "addable": "no"},
    {"name": "Rachelle", "liveschoolName": "Rachelle Xinxin Zhang", "house": "Yellow", "birthdate": "", "altName": "Raciale", "class": "Tech Theater", "addable": "no"},
    {"name": "Kevin", "liveschoolName": "Kevin Haichen Zhao", "house": "Blue", "birthdate": "", "altName": "Kevin", "class": "Tech Theater", "addable": "no"},
    {"name": "Sophie", "liveschoolName": "Sophie Zhijia Zhuang", "house": "Yellow", "birthdate": "", "altName": "Sophie", "class": "Tech Theater", "addable": "no"},
    {"name": "Ricky Z", "liveschoolName": "Ricky Zong", "house": "Blue", "birthdate": "", "altName": "Ricky Z", "class": "Tech Theater", "addable": "no"},
    {"name": "Eric", "liveschoolName": "Eric Yiru Zeng", "house": "Green", "birthdate": "", "altName": "Eric", "class": "Tech Theater", "addable": "no"},

    //AE
    {"name": "Shawn", "liveschoolName": "Shawn Chengkun Bi", "house": "Red", "birthdate": "", "altName": "Shawn", "class": "AE", "addable": "no"},
    {"name": "Sisi", "liveschoolName": "Arianna Sisi Chen", "house": "Green", "birthdate": "", "altName": "Arianna", "class": "AE", "addable": "no"},
    {"name": "Bella", "liveschoolName": "Bella Yaxi Chen", "house": "Red", "birthdate": "", "altName": "Bella", "class": "AE", "addable": "no"},
    {"name": "Rebecca", "liveschoolName": "Rebecca Tsz Yin Cheung", "house": "Blue", "birthdate": "", "altName": "Rebecca", "class": "AE", "addable": "no"},
    {"name": "Shine", "liveschoolName": "Shine Yu Duan", "house": "Blue", "birthdate": "", "altName": "Shine", "class": "AE", "addable": "no"},
    {"name": "Jonathan", "liveschoolName": "", "house": "Blue", "birthdate": "", "altName": "Jonathan", "class": "AE", "addable": "no"},
    {"name": "Olivia", "liveschoolName": "", "house": "Yellow", "birthdate": "", "altName": "Olivia", "class": "AE", "addable": "no"},
    {"name": "Kim", "liveschoolName": "", "house": "Blue", "birthdate": "", "altName": "Kim", "class": "AE", "addable": "no"},
    {"name": "Phyllis", "liveschoolName": "", "house": "Red", "birthdate": "", "altName": "Phyllis", "class": "AE", "addable": "no"},
    {"name": "Laura", "liveschoolName": "", "house": "Yellow", "birthdate": "", "altName": "Laura", "class": "AE", "addable": "no"},
    {"name": "Andy", "liveschoolName": "", "house": "Yellow", "birthdate": "", "altName": "Andy", "class": "AE", "addable": "no"},
    {"name": "Kyla", "liveschoolName": "Kyla Shi", "house": "Red", "birthdate": "", "altName": "Kyla", "class": "AE", "addable": "no"},
    {"name": "Amanda", "liveschoolName": "Amanda Seoah Song", "house": "Green", "birthdate": "", "altName": "Amanda", "class": "AE", "addable": "no"},
    {"name": "Damon", "liveschoolName": "", "house": "Green", "birthdate": "", "altName": "Damon", "class": "AE", "addable": "no"},
    {"name": "Daisy", "liveschoolName": "", "house": "Red", "birthdate": "", "altName": "Daisy", "class": "AE", "addable": "no"},
    {"name": "Austen", "liveschoolName": "Austen Lihan Xie", "house": "Yellow", "birthdate": "", "altName": "Austen", "class": "AE", "addable": "no"},
    {"name": "Elon", "liveschoolName": "", "house": "Green", "birthdate": "", "altName": "Elon", "class": "AE", "addable": "no"},
    {"name": "Eva", "liveschoolName": "", "house": "Blue", "birthdate": "", "altName": "Eva", "class": "AE", "addable": "no"},
    {"name": "William", "liveschoolName": "", "house": "Green", "birthdate": "", "altName": "William", "class": "AE", "addable": "no"},
    {"name": "Molly", "liveschoolName": "", "house": "Green", "birthdate": "", "altName": "Molly", "class": "AE", "addable": "no"},
    {"name": "Lucky", "liveschoolName": "", "house": "Green", "birthdate": "", "altName": "Lucky", "class": "AE", "addable": "no"},
    {"name": "Jerry", "liveschoolName": "", "house": "Red", "birthdate": "", "altName": "Jerry", "class": "AE", "addable": "no"},
    {"name": "Bob", "liveschoolName": "", "house": "Yellow", "birthdate": "", "altName": "Bob", "class": "AE", "addable": "no"},

    //AP Music Theory
    {"name": "Thomas", "liveschoolName": "Thomas Hongyi Long", "house": "Red", "birthdate": "", "altName": "Thomas", "class": "AP Music Theory", "addable": "no"},
    {"name": "Calvin", "liveschoolName": "Calvin Zihao Zhang", "house": "Blue", "birthdate": "", "altName": "Calvin", "class": "AP Music Theory", "addable": "no"},
    {"name": "William", "liveschoolName": "William Zhiwen Zheng", "house": "Yellow", "birthdate": "", "altName": "William", "class": "AP Music Theory", "addable": "no"},
    {"name": "Jocelyn", "liveschoolName": "Jocelyn Lan Bai", "house": "Blue", "birthdate": "", "altName": "Jocelyn", "class": "AP Music Theory", "addable": "no"},
    {"name": "Maggie", "liveschoolName": "Maggie Gan", "house": "Red", "birthdate": "", "altName": "Maggie", "class": "AP Music Theory", "addable": "no"},
    {"name": "Teresa", "liveschoolName": "Teresa Mingxun Jiang", "house": "Green", "birthdate": "", "altName": "Teresa", "class": "AP Music Theory", "addable": "no"},
    
    //MS Band
    {"name": "Anton", "liveschoolName": "Anton Jiayu Ding", "house": "Green", "birthdate": "", "altName": "Anton", "class": "MS Band", "instrumentPart": "Trumpet", "chair": "3", "addable": "yes"},
    {"name": "Jefferey", "liveschoolName": "Jeffrey Nie", "house": "Blue", "birthdate": "", "altName": "Jefferey", "class": "MS Band", "instrumentPart": "Alto Sax", "chair": "3", "addable": "yes"},
    {"name": "Jason", "liveschoolName": "Jason Junfeng Shen", "house": "Red", "birthdate": "", "altName": "Jason", "class": "MS Band", "instrumentPart": "Flute", "chair": "4", "addable": "yes"},
    {"name": "Daniel D", "liveschoolName": "Daniel Zeyang Dou", "house": "Blue", "birthdate": "", "altName": "Daniel", "class": "MS Band", "instrumentPart": "Trumpet", "chair": "5", "addable": "yes"},
    {"name": "Stella S", "liveschoolName": "Stella Yizhi Shang", "house": "Green", "birthdate": "2012-02-29", "altName": "Stella", "class": "MS Band", "instrumentPart": "Cello1", "chair": "1", "addable": "yes"},
    {"name": "Zachary", "liveschoolName": "Zachary Yang", "house": "Green", "birthdate": "2012-12-29", "altName": "Zachary", "class": "MS Band", "instrumentPart": "Trumpet", "chair": "2", "addable": "yes"},
    {"name": "Rebecca", "liveschoolName": "Rebecca Tsz Yin Cheung", "house": "Blue", "birthdate": "2012-05-28", "altName": "Rebecca", "class": "MS Band", "instrumentPart": "Violin1", "chair": "4", "addable": "yes"},
    {"name": "Shine", "liveschoolName": "Shine Yu Duan", "house": "Blue", "birthdate": "2013-02-14", "altName": "Shine", "class": "MS Band", "instrumentPart": "Violin1", "chair": "2", "addable": "yes"},
    {"name": "Kyla", "liveschoolName": "Kyla Shi", "house": "Red", "birthdate": "2013-03-25", "altName": "Kyla", "class": "MS Band", "instrumentPart": "Cello1", "chair": "2", "addable": "yes"},
    {"name": "Amanda", "liveschoolName": "Amanda Seoah Song", "house": "Green", "birthdate": "", "altName": "Amanda", "class": "MS Band", "instrumentPart": "Percussion", "chair": "3", "addable": "yes"},
    {"name": "Austen", "liveschoolName": "Austen Lihan Xie", "house": "Yellow", "birthdate": "2013-01-02", "altName": "Austen", "class": "MS Band", "instrumentPart": "Cello2", "chair": "5", "addable": "yes"},
    {"name": "Rene", "liveschoolName": "Rene King Hei Tang", "house": "Red", "birthdate": "2013-03-28", "altName": "Rene", "class": "MS Band", "instrumentPart": "Contrabass", "chair": "2", "addable": "yes"},
    {"name": "Francis", "liveschoolName": "Francis Liu", "house": "Blue", "birthdate": "2013-01-31", "altName": "Francis", "class": "MS Band", "instrumentPart": "Alto Sax", "chair": "2", "addable": "yes"},
    {"name": "Jacky", "liveschoolName": "Jacky Tsz Hin Cheung", "house": "Green", "birthdate": "2014-08-30", "altName": "Jacky", "class": "MS Band", "instrumentPart": "Violin2", "chair": "5", "addable": "yes"},
    {"name": "Matthew", "liveschoolName": "Matthew Enhao Feng", "house": "Yellow", "birthdate": "2013-12-16", "altName": "Matthew", "class": "MS Band", "instrumentPart": "Violin2", "chair": "7", "addable": "yes"},
    {"name": "Oscar", "liveschoolName": "Oscar Xinchen Fang", "house": "Red", "birthdate": "2013-03-20", "altName": "Oscar", "class": "MS Band", "instrumentPart": "Violin1", "chair": "3", "addable": "yes"},
    {"name": "Kyra", "liveschoolName": "Kyra Jiaqi Yan", "house": "Yellow", "birthdate": "", "altName": "Kira", "class": "MS Band", "instrumentPart": "Viola", "chair": "2", "addable": "yes"},
    {"name": "Felix", "liveschoolName": "Felix Jiaxi Hong", "house": "Blue", "birthdate": "", "altName": "Felix", "class": "MS Band", "instrumentPart": "Cello2", "chair": "6", "addable": "yes"},
    {"name": "Coco", "liveschoolName": "Coco Yuguo Luo", "house": "Yellow", "birthdate": "", "altName": "Coco", "class": "MS Band", "instrumentPart": "Viola", "chair": "2", "addable": "yes"},
    {"name": "Grant", "liveschoolName": "Grant Zhang", "house": "Green", "birthdate": "2014-02-11", "altName": "Grant", "class": "MS Band", "instrumentPart": "Violin2", "chair": "6", "addable": "yes"},

    //HS Band
    {"name": "Kerry", "liveschoolName": "Kerry Liu", "house": "Green", "birthdate": "", "altName": "Kerry", "class": "HS Band", "instrumentPart": "Flute", "chair": "1", "addable": "yes"},
    {"name": "Calvin", "liveschoolName": "Calvin Zihao Zhang", "house": "Blue", "birthdate": "", "altName": "Calvin", "class": "HS Band", "instrumentPart": "Tuba", "chair": "1", "addable": "yes"},
    {"name": "Steven", "liveschoolName": "Steven Siyuan Meng", "house": "Red", "birthdate": "", "altName": "Steven", "class": "HS Band", "instrumentPart": "Baritone", "chair": "1", "addable": "yes"},
    {"name": "Anne", "liveschoolName": "Anne Jiayue An", "house": "Green", "birthdate": "", "altName": "Anne", "class": "HS Band", "instrumentPart": "Trumpet", "chair": "3", "addable": "yes"},
    {"name": "Tyler", "liveschoolName": "Tyler Xiang Li", "house": "Red", "birthdate": "", "altName": "Tyler", "class": "HS Band", "instrumentPart": "Clarinet", "chair": "3", "addable": "yes"},
    {"name": "June", "liveschoolName": "June Ziqiao Qin", "house": "Blue", "birthdate": "", "altName": "June", "class": "HS Band", "instrumentPart": "Flute", "chair": "3", "addable": "yes"},
    {"name": "Sophie", "liveschoolName": "Sophie Geng", "house": "Blue", "birthdate": "", "altName": "Sophie", "class": "HS Band", "instrumentPart": "Horn", "chair": "2", "addable": "yes"},
    {"name": "Jesse", "liveschoolName": "Jesse Junxi Zeng", "house": "Blue", "birthdate": "", "altName": "Jesse", "class": "HS Band", "instrumentPart": "Percussion", "chair": "2", "addable": "yes"},

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
   'Anton', 'Jefferey', 'Jason', 'Daniel D', 'Stella S', 'Zachary', 'Rebecca', 'Shine', 'Kyla', 'Amanda', 'Austen', 'Rene', 'Francis', 'Jacky', 'Matthew', 'Oscar', 'Kyra', 'Felix', 'Coco', 'Grant'
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

const msBandTeacherModeOrder = ['Anton', 'Jefferey', 'Jason', 'Daniel D', 'Stella S', 'Zachary', 'Rebecca', 'Shine', 'Kyla', 'Amanda', 'Austen', 'Rene', 'Francis', 'Jacky', 'Matthew', 'Oscar', 'Kyra', 'Felix', 'Coco', 'Grant'];




const msBandThursdayStudents = [
    'Stella S', 'Zachary', 'Rebecca', 'Shine', 'Kyla', 'Amanda', 'Austen', 'Rene', 'Francis', 'Jacky', 'Matthew', 'Oscar', 'Kyra', 'Felix', 'Coco', 'Grant'
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

const msBandThursdayTeacherModeOrder = ['Stella S', 'Zachary', 'Rebecca', 'Shine', 'Kyla', 'Amanda', 'Austen', 'Rene', 'Francis', 'Jacky', 'Matthew', 'Oscar', 'Kyra', 'Felix', 'Coco', 'Grant'];





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