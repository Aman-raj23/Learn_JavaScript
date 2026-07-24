// Suppose you have to perform these tasks in order:

// Login user
// Get user profile
// Get user posts
// Get comments
// Logout

// Since each task depends on the previous one, you end up nesting callbacks.

// Example


loginUser(function(user) {

    getProfile(user, function(profile) {

        getPosts(profile, function(posts) {

            getComments(posts, function(comments) {

                console.log("All data loaded!");

            });

        });

    });

});


// this create a shape like  this:-

// loginUser(
//     function(){
//         getProfile(
//             function(){
//                 getPosts(
//                     function(){
//                         getComments(
//                             function(){

//                             }
//                         )
//                     }
//                 )
//             }
//         )
//     }
// )