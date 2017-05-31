const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config/github');

const baseApi = `https://api.github.com/repos/${config.OWNER}/${config.REPO}/issues`

const getIssuesUrl = `?state=open&client_id=${config.CLIENT_ID }&client_secret=${config.CLIENT_SECRET}&page=`

// Get all issues
router.get('/issues', (req, res) => {

    let issues = [];

    let getIssues = page => {

        // res.send(`${getIssuesUrl}${page}`);

        request({
            url: `${baseApi}${getIssuesUrl}${page}`,
            headers: { 'user-agent': 'git-linio' },
            json: true
        }, (error, response, body) => {

            if(!error && response.statusCode === 200) {

                for(let index = 0; index < body.length; index++) {

                    if(!body[index].pull_request) {
                        issues.push({
                            number: body[index].number,
                            title: body[index].title,
                            state: body[index].state,
                            creator: body[index].user.login,
                            body: body[index].body,
                            assignee: body[index].assignee ? body[index].assignee.login : ''
                        });
                    }
                }

                if(body.length < 30) {
                    res.status(200).send(issues);
                } else {
                    getData(page + 1);
                }
            } else {
                res.status(500).send(error);
            }
        });
    };
    
    getIssues(1);

});

router.post('/issues', (req, res) => {

    request({
        url: `${baseApi}?access_token=${config.ACCESS_TOKEN}`,
        method: 'POST',
        headers: {
            'user-agent': 'git-linio',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    }, (error, response, body) => {

        if(!error) {
            res.status(200).send({msg: 'Success!'});
        } else {
            res.status(500).send({'error': error});
        }

    })

})


module.exports = router;