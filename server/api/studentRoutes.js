const router = require('express').Router()
const { Student, Campus } = require('../db/models')


router.get("/", (req, res, next) => {
    Student.findAll()
    .then(students => {
        res.json(students)
    })
    .catch(next)
})

router.get("/:id", (req, res, next) => {
    Student.findById(req.params.studentId)
    .then(student => {
        res.json(student)
    })
    .catch(next)
}
)

router.get("/:id", (req, res, next) => {
    Student.findById(req.params.studentId)
    .then(student => {
        res.json(student)
    })
    .catch(next)
}
)

router.post("/", (req, res, next) => {
    Student.create(req.body)
    .then(student => {
        res.json(student)
    })
    .catch(next)
}
)

router.put("/:id", (req, res, next) => {
    console.log('h')
    Student.findById(req.params.id)
    .then(student => {
       return student.update(req.body)
    })
    .then(updated =>
        res.json(updated)
    )
    .catch(next)
}
)

router.delete("/:id", (req, res, next) => {
    Student.destroy({where: { id: req.params.id}
    })
    .then(updated =>
        res.json(updated)
    )
    .catch(next)
}
)


module.exports = router