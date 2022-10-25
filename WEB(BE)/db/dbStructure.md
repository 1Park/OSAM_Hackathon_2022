
Insert Into Users(name,belong,rank,number,working,location,heartrate,tagID) Values ("서지혁", "체계대대 통신중대 3조","일병","22-70012345","근무Off","복지시설",0, 101278 );
Insert Into Users(name,belong,rank,number,working,location,heartrate) Values ("서지혁", "체계대대 통신중대 2조","병장","21-70012333","근무On","AAOC",0 );
Insert Into Users(name,belong,rank,number,working,location,heartrate) Values ("박원", "체계대대 운영중대 3조","일병","22-70000000","근무On","AAOC",0 );
Insert Into Users(name,belong,rank,number,working,location,heartrate) Values ("최영인", "3통제대 식별반","일병","22-70008084","근무On","AAOC",0 );

Select substr( belong,0, instr(belong,' ')+1) ,  count( *) from Users group by substr(belong,0, instr(belong,' ')+1);


DB구조 변경하는법

Create table temp (name varchar(20),
belong varchar(255),
rank varchar(12) default "이병",
number char(12),
working char(12) default "근무Off",
location varchar(40) default "생활관",
heartrate int default 0,
spo2 int default 100,
tagID varchar(40) ,
operation char(12) default "작전대기");

INSERT INTO temp(name,belong,rank,number,working,location,heartrate,spo2,tagID,operation) SELECT * FROM Users;
Drop table Users;

Create table Users (name varchar(20),
belong varchar(255),
rank varchar(12) default "이병",
number char(12),
working char(12) default "근무Off",
location varchar(40) default "생활관",
heartrate int default 0,
spo2 int default 100,
tagID varchar(40) ,
operation char(12) default "작전대기");

INSERT INTO User SELECT * FROM temp;




>>columns<<
name 이름
belong 소속
rank 계급
number 군번
working 근무여부
location 위치
heartrate 심박수
spo2 산소포화도
tagID RFID 태그 ID
operation 작전중 여부

Create table _방공관제사령부 (name varchar(20), leader varchar(20), leaderRank varchar(12), deputy varchar(20), deputyRank varchar(12));
Insert Into _방공관제사령부 Values("32전대", "이재용", "대령", "이적","원사");

Create table _32전대 (name varchar(20), leader varchar(20), leaderRank varchar(12), deputy varchar(20), deputyRank varchar(12));
Insert Into _32전대 Values("체계대대", "박준형", "중령", "박효신","원사");
Insert Into _32전대 Values("3통제대", "박정훈", "대령", "김범수","원사");


Create table _체계대대 (name varchar(20), leader varchar(20), leaderRank varchar(12), deputy varchar(20), deputyRank varchar(12));
Insert Into _체계대대 Values("운영중대", "박세현", "대위", "곽철용","원사");
Insert Into _체계대대 Values("통신중대", "박정민", "대위", "임꺽정","준위");
Insert Into _체계대대 Values("정비중대", "마태림", "대위", "홍길동","원사");
Insert Into _체계대대 Values("운영통제실", "박준일", "대위(진)", "곽두팔","원사");

Create table _3통제대 (name varchar(20), leader varchar(20), leaderRank varchar(12), deputy varchar(20), deputyRank varchar(12));
Insert Into _3통제대 Values("식별반", "박기완", "대위", "윤종신", "상사");
Insert Into _3통제대 Values("공중감시", "박세빈", "중위", "성시경", "원사");

Create table _운영중대 (name varchar(20), leader varchar(20), leaderRank varchar(12), deputy varchar(20), deputyRank varchar(12));



  var result = { battalion: null } 
  info = getFromDB(dbPath, `SELECT * FROM _`+targetHead+` WHERE name ="`+target+`"` )
  console.log(info)
  
  result.battalion= getFromDB(dbPath,`SELECT * FROM _`+target )
  result.leader = info.leader;  result.leaderRank = info.leaderRank;
  result.deputy = info.deputy;  result.deputyRank = info.deputyRank;

  res.send(result)