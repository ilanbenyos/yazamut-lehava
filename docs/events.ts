// אירועים 
// תאריך הזמנה
// תאריך אירוע
// סוג אירוע
// מי מזמין את האירוע
// מספר משתתפים
// שעת התחלה
// שעת סיום
// האם יש כיבוד?
// סוג כיבוד
// סוג סידור החדר
//  האם יש פיצולים?
//  אם כן, אחרי כמה זמן?
//  ציוד נלווה
//  הערות + בקשות מיוחדות

export interface event {
    id: number;
    eventDate: Date;//האם ארוע יכול להיות רק יום אחד? מה עם ארוע של יומיים?
    hourFrom:Date;
    hourTo:Date;
    reservationDate: Date;
    eventType: number;//meetingTypes (id)
    eventOwner:string;
    numOfParticipents:number;
    rooms:number[];//Rooms ([1,4,6])
    comments:string;
}

const meetingTypes =[
    {id:1, name:'פגישה'},
    {id:2, name:'כנס'},//...
  ]

  const Rooms =[
    {id:1, name:'הירוק'},
    {id:2, name:'הכתום'},//...
  ]