export class EmpManagementService{
status:boolean =false;
//rec: any=null;
addEmp(emp:any, emplist:any)
{
     this.status = false;
    for(let rec in emplist){

        if(emp.empId == emplist[rec].empId)

           this.status=true;

    }

    if(this.status==true){

        window.alert('This employee Id is already existed.Try new one..');

    }

    else{

        this.status=false;

    emplist.push({empId:emp.empId,firstName:emp.firstName,lastName:emp.lastName,

        age:emp.age,location:emp.location})

        alert("One Employee");

       

    }
}
    deleteEmp(eID: any, emplist: any){

    for (let i in emplist)
    {
        console.log(emplist[i].empID);
        if(eID== emplist[i].empID)
        emplist.splice(i,1);
    }
}
updateEmp()
{

}
}
