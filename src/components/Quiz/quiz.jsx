import React, {useState, useRef} from 'react'
import './Quiz.scss'
import {data} from '../../../assets/data'

export const quiz = () => {

    let [index, setIndex] = useState(1);
    let [question, setQuestion] = useState(data[index])
    let [lock, setLock] = useState(false)

    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)
    let Option4 = useRef(null)

    let option_array =[Option1, Option2, Option3, Option4]

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans===ans) {
                e.target.classList.add("correct")
                setLock(true)
            } else {
                e.target.classList.add("incorrect");
                setLock(true)
                option_array[question.ans-1].current.classList.add("correct")
            }
        }
    }


  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr/>
        <h2>{index+1}. {question.question}</h2>
        <ul>
            <li ref={Option1} onClick={(e)=> {checkAns(e,1)}}>{question.option1}</li>
            <li ref={Option2} onClick={(e)=> {checkAns(e,2)}}>{question.option2}</li>
            <li ref={Option3} onClick={(e)=> {checkAns(e,3)}}>{question.option3}</li>
            <li ref={Option4} onClick={(e)=> {checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default quiz