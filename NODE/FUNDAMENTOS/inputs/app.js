const colors = require('colors')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            name: 'p1',
            message: 'qual a primeira nota'
        },
        {
            name:'p2',
            message: 'qual a segunda nota'
        }
    ])
    .then((answers) =>{
        console.log(answers);
        const media = ((Number(answers.p1) + Number(answers.p2)) / 2).toFixed(1)

        if(media>=6){
            console.log(`Aluno aprovado com media${media}` .bgGreen)
        }else{
            console.log(`aluno Reprovado com media ${media}` .rainbow)
        }
    })
    .catch(err=>console.error(err))