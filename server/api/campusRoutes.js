const router = require('express').Router()
const Campus = require('../db/models/campus')

router.get("/", (req, res, next) => {
    console.log('now here')
    Campus.findAll()
    .then(campuses => {
        res.json(campuses)
    })
    .catch(next)
})

router.get("/:campusId", (req, res, next) => {
    Campus.findById(req.params.campusId)
    .then(campus => {
        res.json(campus)
    })
    .catch(next)
}
)

router.get("/:id", (req, res, next) => {
    Campus.findById(req.params.id)
    .then(campus => {
        res.json(campus)
    })
    .catch(next)
}
)

router.post("/campuses", (req, res, next) => {
    Campus.create(req.body)
    .then(campus => {
        res.json(campus)
    })
    .catch(next)
}
)

router.put("/:id", (req, res, next) => {
    Campus.findById(req.params.id)
    .then(campus => {
       return campus.update(req.body)
    })
    .then(updated =>
        res.json(updated)
    )
    .catch(next)
}
)

router.delete("/campus/:campusId", (req, res, next) => {
    Campus.destroy({where: { id: req.params.id}
    })
    .then(updated =>
        res.json(updated)
    )
    .catch(next)
}
)

module.exports = router

// GET
// - all campuses
// - a campus by id
// - all students
// - a student by id
// POST
// - new campus
// - new student
// PUT
// - updated student info for one student
// - updated campus info for one campus
// DELETE
// - a campus
// - a student