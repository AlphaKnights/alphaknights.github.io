siteApp.controller('allstarController', function($scope, $location, $http){
  $scope.members = [
    {
      "name": "James Conde",
      "position": "President, Captain",
      "image": "/assets/img/team/james.png",
      "bio": "James Conde is a senior,18, and about to start the next phase of his life in college. He is the founding Captain of San Marcos’s Inaugural First Robotics Team. He is very proud to be starting a program that he hopes will provide valuable experience and scholarships to the intrepid students who take on the First Robotics challenge. His hope is that future students learn as much as he has about robotics, leadership, marketing, business, and programming. Truly, First Robotics is not simply about engineering a great robot, but as James has come to see it, engineering a great team."
    },
    {
      "name": "Michael Maddy",
      "position": "Vice-President",
      "image": "/assets/img/team/michael.png",
      "bio": "Michael Maddy is a junior and is 16 years old. He has participated in robotics club for 3 years and is one of the vice presidents. He has experience in Java development and dabbles in web development. As a child, he was always interested in electronics, cables and pipes. Now he plans to major in Computer Science or Engineering."
    },
    {
      "name": "Ashik Simon",
      "position": "Vice-President",
      "image": "/assets/img/team/ashik.jpg",
      "bio": "Ashik Simon is a junior and 16 years old. Currently, he is vice president of robotics club and has participated for the last 3 years. He works mainly on hardware and also enjoys the programming side of the challenge. This passion for robotics and hardware has led him to creating a RC (radio controlled) club for public awareness about the hobby. This being the rookie year for San Marcos High School, Ashik plans to utilize his prior experience in Northrop Grumman Challenges as well as science olympiad to help this team excel. Ashik plans to major in a field of programming or engineering at a four year university."
    },
    {
      "name": "TJ Horner",
      "position": "Web Development, Social Media, Open Source Enthusiast",
      "image": "/assets/img/team/tj.jpg",
      "bio": "TJ is a 16-year-old sophomore. In his free time, he likes building cool software projects and whatnot. Professionally, he has interned for StudentRND since middle school. StudentRND is a nonprofit whose goal is to get students to take the first step into the programming world; StudentRND also runs an event called CodeDay — a 24-hour programming marathon geared toward beginners. He plans to major in Computer Science. He also made this website!"
    },
    {
      "name": "Mary Anne Lee",
      "position": "Hardware, Social Media",
      "image": "/assets/img/team/maryanne.jpg",
      "bio": "Mary Anne is 17 and a senior. She is captain of Academic League and Math Club at San Marcos High School, and has been involved with international and national piano competition since the age of 5. She plans to attend a 4 year university and major in molecular biology in the near future."
    },
    {
      "name": "David Caccavo",
      "position": "Marketing, Social Media",
      "image": "/assets/img/team/davidCaccavo.png",
      "bio": "David is 16 years old and is a junior. He plays lacrosse and is VP of Politics Club at SMHS. David has taken the opportunity to grow throughout his high school career. He is a member of the Simon Scholar Foundation and plans on attending a four-year university. Although this is his first year doing Robotics, he is trying to do anything he can to support the team."
    },
    {
      "name": "Jeremy Millard",
      "position": "Scouting, Analytics",
      "image": "/assets/img/team/jeremy.jpeg",
      "bio": "Jeremy is 17 and a senior. He’s been a part of the SMHS robotics club for all four years of high school.  Jeremy also owns a Minecraft server called DiamondFire, where players build their own games using a scripting language he created.  He’s grown the server into a profitable business, with sales in over 35 countries. Jeremy plans to major in Computer Science."
    },
    {
      "name": "Damien Deerinck",
      "position": "Hardware",
      "image": "/assets/img/team/damien.jpg",
      "bio": "Damien is a junior at SMHS who enjoys working with computers and robotics. His hobby’s run from video games to water polo, and he is always willing to try new things. While he’s a little unsure of what he wants to do as a career, he feels this competition is a step in the right direction for figuring out his passion."
    },
    {
      "name": "Pasha Bouzarjomehri",
      "position": "Software",
      "image": "/assets/img/team/pasha.jpg",
      "bio": "Pasha is a junior at SMHS. He has many years of experience in various scripting and programming languages for both personal uses and as an intern. He has joined the Alpha Knights team to bring his experience to the team and assist them in making the robot not only functional, but ultimately a winner. After spending countless hours with the build team on the 2017 rookie robot, he has made considerable progress on its software and firmware as a programming lead."
    },
    {
      "name": "Alexander Garcia",
      "position": "Software, Hardware, Web Development, Marketing",
      "image": "/assets/img/team/alex.jpg",
      "bio": "Alexander Garcia is a junior at SMHS. He is a computer programmer who has experience in a variety of languages such as Java, Swift, C#, and C++. He is a newcomer to the robotics club and has put his computer programming skills to the test, learning under the programming lead in order to get the robot operational while also growing as a programmer. He is also the graphics designer for the Alpha Knights. Alexander plans to major in Computer Science at a four year university."
    },
    {
      "name": "Fernando Garcia",
      "position": "Software, Photographer, Hardware",
      "image": "/assets/img/team/fernando.jpg",
      "bio": "Fernando is 16 and a junior at SMHS. He is currently a programer and photographer for the Alpha Knights. He also helps out in other ways such as hardware and engineering. Fernando plans on doing Cyber Operations and Warfare in the future for the Navy or Valparaiso University. He is also interested in Musical Performances in guitar."
    },
    {
      "name": "Nicholas Eastmond",
      "position": "Social Media",
      "image": "/assets/img/team/nicholas.jpg",
      "bio": "Nick is a 17 year old junior at San Marcos High School. He is in the beach and indoor volleyball team and enjoys playing music on guitar and piano during his free time. This is his first year being involved in robotics and he is very interested in computer science and engineering. Nick hopes to keep learning from his teammates and gain more experience during the First Robotics competition."
    },
    {
      "name": "Bryan Gonzalez",
      "position": "Hardware",
      "image": "/assets/img/team/bryan.jpg",
      "bio": "Bryan Gonzalez is a 17 year old Junior. He is new to the Robotics Team and is still learning about the robotics."
    },
    {
      "name": "Vinh Tran",
      "position": "Project Coordinator, Hardware, Field Events",
      "image": "/assets/img/team/vinh.jpg",
      "bio": "Vinh Tran is a 15 year old sophomore. He is a member of the San Marcos High School Surf Team, and participated in and outside robotics class involving both coding and building for several years. Vinh plans to major in Computer Science and Mechanical Engineering. He hopes to learn new skills and useful knowledge by participating in the FRC."
    },
    {
      "name": "Josh Volpe",
      "position": "Field Events",
      "image": "/assets/img/team/josh.jpg",
      "bio": "Josh Volpe is 17 and is a junior. He has been a member of the Knight Regiment Front Ensemble for three years. Through his time in band he has learned the importance of teamwork, time management, and dedication."
    },
    {
      "name": "Daniel Gutierrez",
      "position": "Hardware",
      "image": "/assets/img/team/daniel.jpg",
      "bio": "Daniel is 17 and a junior at San Marcos high school. Despite not being a part of the team his freshman and sophomore year is glad to do what he can especially in the first robotics competition. On the robot he was in charge of the ball launcher mechanism."
    },
    {
      "name": "Vincent Le",
      "position": "Field Events",
      "image": "/assets/img/team/vincent.jpg",
      "bio": "Vincent Le is 17 and is a Junior. He enjoys playing osu! and is experiencing his first time in a robotics team. He plans to work in the computer industry when he leaves high school and possibly design games if given a chance."
    },
    {
      "name": "Emma Wensley",
      "position": "Marketing, Social Media",
      "image": "/assets/img/team/emmaWensley.jpg",
      "bio": "Emma is 17 and is senior. She founded the Women in Science Club and is co-president of the SMHS Rocketry Team. In addition, she has been dancing for over 14 years. This is her first year participating in robotics, and she has greatly enjoyed leading the social media and marketing team. Emma hopes to pursue a degree in chemical engineering in the near future."
    },
    {
      "name": "Justin Quach",
      "position": "Field Events",
      "image": "/assets/img/team/justin.jpg",
      "bio": "Justin is 16 and a Junior. He is an active contributor in both the school’s Academic League and Science Olympiad. His main hobbies include Origami and other precision based arts. Justin plans to major in electrical engineering at a 4 year university."
    },
    {
      "name": "Sean Yin",
      "position": "Software",
      "image": "/assets/img/team/sean.jpg",
      "bio": "Sean is a senior at SMHS who has always been interested in the many technologies spread throughout the world.  Although not particularly skilled in robotics yet, Sean hopes to spend time learning about the functions of technology as well as society.  The First Robotics Club has been a lot of fun despite not knowing much, and here’s to doing well in the competition!"
    },
    {
      "name": "Sean Saedi Nia",
      "position": "Social Media",
      "image": "/assets/img/team/seans.jpg",
      "bio": "Sean is 16 years old and a junior at SMHS. This is his first year participating in the Business, Social media and, Marketing teams of the SMHS Alpha Knights. Throughout his high school he has participated in many clubs like the Future Health Profession club, Game Development and etc… . He plans on pursuing a career as a Cardiovascular Surgeon and is excited to be apart of this great experience."
    },
    {
      "name": "Sinoeh Esparza",
      "position": "Social Media",
      "image": "/assets/img/team/sinoeh.jpg",
      "bio": "Sinoeh is a 17 year old Junior attending San Marcos High School.  He is a part of the social media team.  He helps with instagram posts and account noticeability and helps out wherever else is needed, including attempts to get in touch with other teams.  Outside of school Sinoeh plays waterpolo, plays video games, and hangs out with friends."
    },
    {
      "name": "Morgan Vaca",
      "position": "Social Media",
      "image": "/assets/img/team/morgan.jpg",
      "bio": "Morgan is currently a junior at SMHS and this is her first year participating in the marketing and social media aspect of the Alpha Knights. She currently has an internship at Palomar Hospital and is stationed in the Cardiovascular field. She is excited to see what the Alpha Knight’s can accomplish this year and what she can learn from the FRC."
    },
    {
      "name": "Jasmine Krause",
      "position": "Social Media, Marketing",
      "image": "/assets/img/team/jasmine.jpg",
      "bio": "Jasmine is currently a junior at San Marcos High School. This is her first year participating in the social media and marketing team of Robotics. She has been on Varsity track and field for 2 years and plans to continue. She wants to be a biomedical engineer and is very interested in the medical and technological field."
    },
    {
      "name": "Pricilla Chanthlangsy",
      "position": "Social Media",
      "image": "/assets/img/team/priscilla.jpg",
      "bio": "Priscilla is 16 and a junior at San Marcos High School. She is excited to join a club that is outside her range and learn about making robots. She is apart of the creative and visual aspects of the Robotics Team and makes sure that they look a-1. Priscilla plans on becoming a great film director and promote the Robotics Club  to everyone."
    },
    {
      "name": "Brooke Adams",
      "position": "Social Media",
      "image": "/assets/img/team/brooke.jpg",
      "bio": "Brooke is 16 and a junior at San Marcos High School. She decided to join the team and club to expand outside her comfort zone. She is apart of the visual aspects and social media as well as field hockey, water polo, and softball. She plans on going to UCSB or UCI and study Kinesiology, or Digital media communication."
    },
    {
      "name": "Marc MacGalliard",
      "position": "Hardware",
      "image": "/assets/img/team/marc.jpg",
      "bio": "Marc is a 15 year old freshman at San Marcos High School. Involved in band, Boy Scouts, karate, and other programs, Marc enjoys being a builder and engineer who loves to experiment and contribute as much as possible. He has been involved with most all of the robot and continues to contribute to the best of his ability. Marc plans on going to the Cal Poly School of Engineering."
    },
    {
      "name": "Andrew Tsai",
      "position": "Hardware",
      "image": "/assets/img/team/andrewTsai.jpg",
      "bio": "Andrew was born and raised in West Philadelphia. His hobbies including chilling out, maxing, relaxing all cool, and shooting b-ball outside of the school. A couple of guys, who were up to no good, started makin trouble in his neighborhood. He didn’t get into a fight because he only fights Pasha, but his mother got scared and moved him with his aunt and uncle in San Marcos."
    },
    {
      "name": "Daniel Pack",
      "position": "Hardware",
      "image": "/assets/img/team/danielp.jpg",
      "bio": "Daniel is 14 and a Freshman. He is one of the hardware engineers with the rope climber. He is also a member of Science Olympiad and Academic League at SMHS. He like to go to the beach and play tennis in his free time and he plans to study something related to one of the STEM fields in college. He joined the FRC to learn more about robotics and to gain experience and other useful knowledge from his teammates by doing this program."
    },
    {
      "name": "Brian Pack",
      "position": "Hardware",
      "image": "/assets/img/team/brianPack.jpg",
      "bio": "Brian is a junior at SMHS.  He has been interested in many different STEM fields throughout his life.  He is on the school's Science Olympiad and Tarc Rocket teams for the last two years, and has also had experience with drones and computer programing.  He joined the robotics team to learn more about robotics, engineering and coding.  Brian is working on the ball launching and collecting teams for the Alpha Knights."
    },
    {
      "name": "Troy Ryder",
      "position": "Hardware",
      "image": "/assets/img/team/troy.jpg",
      "bio": "Troy Ryder is a Junior at San Marcos High School. Troy joined the Robotics Team because it seemed like fun.  What Troy didn’t know before is that it was a lot of work.  Now Troy is working on the Robotics Team and having fun."
    },
    {
      "name": "Angel Mai",
      "position": "Video Producer",
      "image": "/assets/img/team/angel.jpg",
      "bio": "Angel Mai is 16 at San Marcos High School. She is a skilled photographer who is responsible for the production of the Alpha Knights' videos. She is also a member of the Knight Regiment battery and also has a musical talent. She has impacted the Alpha Knights robotics team by outputting quality videos that make the Alpha Knights stand out against the other teams."
    }
  ];

  $scope.amount = "5";
  $scope.showThanks = false;
  $scope.loading = false;
  $scope.alreadyGotToken = false;

  // Create a Stripe client
  var stripe = Stripe(TEST_MODE ? "pk_test_aayjQps82qwysfXMA9CTNpGb" : "pk_live_hhKOJh4L5wPfw6u01GNjUvKQ");

  // Create an instance of Elements
  var elements = stripe.elements();

  // Custom styling can be passed to options when creating an Element.
  // (Note that this demo uses a wider set of styles than the guide below.)
  var style = {
    base: {
      color: '#32325d',
      lineHeight: '24px',
      fontFamily: '\"Roboto\", sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      // '::placeholder': {
      //   color: '#aab7c4'
      // }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  };

  // Create an instance of the card Element
  var card = elements.create('card', {style: style});

  // Add an instance of the card Element into the `stripe-element` <div>
  card.mount('#stripe-element');

  // Handle real-time validation errors from the card Element.
  card.addEventListener('change', function(event) {
    // const displayError = document.getElementById('card-errors');
    // if (event.error) {
    //   displayError.textContent = event.error.message;
    // } else {
    //   displayError.textContent = '';
    // }
  });

  // Handle form submission
  var form = document.getElementById('payment-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if($scope.amount){
      $scope.loading = true;
      $scope.$apply();

      if(!$scope.alreadyGotToken){
        stripe.createToken(card).then(function(result) {
          if(result.error){
            // Inform the user if there was an error
            $scope.loading = false;
            $scope.$apply();
            // var errorElement = document.getElementById('card-errors');
            // errorElement.textContent = result.error.message;
          }else{
            $scope.alreadyGotToken = true;
            $scope.$apply();           
            $http.post(API_HOST + "/donate",
            {
              amount: $scope.amount,
              email: $scope.email,
              pageid: pageid,
              stripeToken: result.token
            })
            .then(res => {
              if(res.data && res.data.ok){
                $scope.loading = false;
                $scope.success = true;
                $scope.showThanks = true;
              }else{
                alert("An error occurred processing your payment: " + res.data.message);
                $scope.loading = false;
              }
            })
          }
        });
      }
    }else{
      alert("Please enter a valid donation amount.");
    }
  });
});
