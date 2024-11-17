class Student {
    constructor(name, age, grade, subject){
        this.name = name
        this.age = age
        this.grade = grade
        this.subject = subject
    }

    displayInfo(){
       return console.log(`이 학생의 이름은 ${this.name} 이고 
            나이는 ${this.age}이며 학년은 ${this.grade}입니다.`)
    }

    addSubject(subject)
    {if(!this.subject.includes(subject)){  // includes라고 쓰기!
        this.subject.push(subject)
        console.log(`${subject}가 추가되었습니다.`)
    }
        else {
            console.log('이미 포함된 과목입니다.')
        }

    }

    removeSubject(subject){
        let index = this.subject.indexOf(subject)
        if(index !== -1) {
            this.subject.splice(index,1)
            console.log(`${subject}가 제거되었습니다.`)
        }

        else {
            console.log(`this ${subject} is not in the list`)
        }

    }

    promote(grade){
        this.grade +=1
        console.log(`학년은 ${this.grade} 학년입니다`)
    }
    
    getSubject(){
        console.log(`현재 수강중인 과목은 ${this.subject.join(',')}입니다`)
    }


}



    const student1 = new Student('Alice', 20, 2, ['Math', 'English']);
const student2 = new Student('Bob', 22, 3, ['History', 'Science']);
const student3 = new Student('Charlie', 21, 2, ['Math', 'Biology']);

student1.promote()
student1.getSubject()
student1.addSubject('Physics')
student1.removeSubject('Math')