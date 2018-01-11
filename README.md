# assignment_djello

Project management with that great wobbly taste. user has many boards

USER

* userid/password
* password
  <!-- * email?
* profile id?

PROFILE table(?) -->

user can have many boards

BOARD table

* board id
* user id (that board belongs to)
* board title

LIST table

* list id
* list title
* list description
* board id as foriegn key(that it belongs to)

CARD table

* card id
* list id as foriegn key(that it belongs to)
* description
* priority
* completed at: date (to act as status (completed/not completed))

CARD/USER join table (cards can have many users & vice versa)

* card id
* userID

ACTIVITY table

* activity id
* card id as foreign key
* user id as foreign key
* description(?)
* date

types of activites to log

* editing title/description
* adding members
* marking as complete/incomplete
* editing priority value
