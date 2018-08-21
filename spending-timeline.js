//draws divs based on spending
var table,leftPos,dateCount,d,e;

function preload() {
  table = loadTable('assets/data.csv', 'csv', 'header');
}

function setup() {

  canvas=createCanvas(960,9000);
  background(0);
  fill(255);

  //set up positions for each row
  dateCount=1;
  leftPos=0;

  //parse the table and convert the strings to dates and numbers
  d = dateCaller(0,0);
  d = dateConverter(d);
  d = new Date(d);
  e = dayConvert(d.getDay());

  //create the top row
  textAlign(LEFT);
  text((table.get(0,0)).slice(0,2),130,dateCount*20);
  textAlign(RIGHT);
  text(e,120,dateCount*20);
  fill(150,100+table.get(0,5),100);
  rect(150,dateCount*20-10,table.get(1,5),10);

  //create the rows
  for (var r = 1; r < table.getRowCount()-1; r++){
    d = dateCaller(r,0);
    if(d!=dateCaller(r-1,0)){
      dateCount++;
      leftPos=0;
      fill(255);
      textAlign(LEFT);
      text(d.slice(0,2),130,dateCount*20);
      d = dateConverter(table.get(r,0));
      d = new Date(d);
      e=d.getDay();
      e=dayConvert(e);
      textAlign(RIGHT);
      if(d.getDay()==1){
        stroke(255,150,150);
        line(70,dateCount*20+5,120,dateCount*20+5);
        fill(255,150,150);
      }
      stroke(0);
      text(e,120,dateCount*20);
      fill(255);
      rect(150,dateCount*20-10,dateCaller(r,5),10);

      //create a month separator
      if(d.getDate()=='1'){
        stroke(255);
        line(10,dateCount*20+5,width,dateCount*20+5);
        stroke(0);
        text(monthConvert(d.getMonth()),900,dateCount*20)
        stroke(0);
      }
    }

    //create the coloured rectangles
    if(d==dateCaller(r-1,0)){
      fill(150,100,dateCaller(r,5)*3);
      rect(150+leftPos,dateCount*20-10,dateCaller(r,5),10);
      createElement('cell'+[r],table.get(r, 4) + " " +table.get(r, 5) );
      select('cell'+[r]).position(150+leftPos,dateCount*20+70,);
      select('cell'+[r]).class('cellStyle');
      leftPos=leftPos+Number(dateCaller(r,5));
     }

  }

}


//create the dates for the display
function dateCaller(r,c){
  return table.get(r,c);
}

function dateConverter(s){
  return s.slice(3,6)+s.slice(0,3)+s.slice(6,11)
}

function dayConvert(s){
  switch (s) {
    case 0:
        s = "Sunday";
        break;
    case 1:
        s= "Monday";
        break;
    case 2:
        s = "Tuesday";
        break;
    case 3:
        s = "Wednesday";
        break;
    case 4:
        s = "Thursday";
        break;
    case 5:
        s = "Friday";
        break;
    case 6:
        s = "Saturday";
        break;
  }
  return s;
}

function monthConvert(s){
  switch (s) {
    case 0:
        s = "January";
        break;
    case 1:
        s= "February";
        break;
    case 2:
        s = "March";
        break;
    case 3:
        s = "April";
        break;
    case 4:
        s = "May";
        break;
    case 5:
        s = "June";
        break;
    case 6:
        s = "July";
        break;
    case 7:
        s = "August";
        break;
    case 8:
        s = "September";
        break;
    case 9:
        s = "October";
        break;
    case 10:
        s = "November";
        break;
    case 11:
        s = "December";
        break;
  }
  return s;
}

function draw(){

}
