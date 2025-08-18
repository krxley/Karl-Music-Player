// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Return button from player to home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elements for the Song Detail Page (will not be used immediately when clicking on a song, but will still load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Play button on detail page

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Add this
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Add this

// App State
let songs = [
    {
        id: 1,
        title: "Consume",
        artist: "Chase Atlantic",
        album: "Beauty in Death",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.VwivM--7Xx_SmgsqXBLi8AAAAA&pid=Api&P=0&h=220",
        audioSrc: "audio/consume.mp3",
        videoBgSrc: "videos/consume.mp4", // This song's special background video path
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0.8, text: "She said, Careful, or you'll lose it" },
            { time: 4, text: "But, girl, I'm only human," },
            { time: 7, text: "And I know there's a blade where your heart is" },
            { time: 10, text: "And you know how to use it" },
            { time: 13, text: "And you can take my flesh if you want girl" },
            { time: 16, text: "But, baby, don't abuse it (Calm down)" },
            { time: 19, text: "These voices in my head screaming, Run now (Don't run)" },
            { time: 22, text: "I'm praying that they're human" },
            { time: 25, text: "Please understand that I'm trying my hardest" },
            { time: 28, text: "My head's a mess, but I'm trying regardless" },
            { time: 31, text: "Anxiety is one hell of a problem" },
            { time: 34, text: "She's latching onto me, I can't resolve it" },
            { time: 37, text: "It's not right, it's not fair, it's not fair" },
            { time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
            { time: 47, text: "Oh, no, no, no, ooh-ooh" },
        ]
    },
    {
        id: 2,
        title: "Perfect",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        albumArtUrl: "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
        audioSrc: "audio/Ed Sheeran - Perfect.mp3",
        videoBgSrc: "videos/perfect_bg.mp4", // This song's special background video path
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 2.9 , text: "I found a love for me" },
            { time: 10.6, text: "Oh, darlin, just dive right in and follow my lead" },
            { time: 18, text: "I found a girl, beautiful and sweet" },
            { time: 25, text: "I never knew you were the someone waiting for me" },
            { time: 32, text: "'Cause we were just kids when we fell in love" },
            { time: 36.7, text: "Not knowin' what it was" },
            { time: 40.5, text: "I will not give you up this time" },
            { time: 48, text: "But, darlin', just kiss me slow" },
            { time: 51.6, text: "Your heart is all I own" },
            { time: 55.9, text: "And in your eyes, you're holdin' mine" },
            { time: 62.3, text: "Baby, I'm dancing in the dark with you between my arms" },
            { time: 73.6, text: "Barefoot on the grass, listening to our favorite song" },
            { time: 80.9, text: "When you said you looked a mess, I whispered underneath my breath" },
            { time: 88, text: "But you heard it, darling, you look perfect tonight" },
            { time: 101, text: "Well, I found a woman, stronger than anyone I know" },
            { time: 109, text: "She shares my dreams, I hope that someday, I'll share her home" },
            { time: 114, text: "I found a love to carry more than just my secrets" },
            { time: 125, text: "To carry love, to carry children of our own" },
            { time: 131, text: "We are still kids, but we're so in love, fightin' against all odds" },
            { time: 139, text: "I know we'll be alright this time" },
            { time: 146, text: "Darling, just hold my hand, be my girl, I'll be your man" },
            { time: 154.5, text: "I see my future in your eyes" },
            { time: 161, text: "Oh, baby, I'm dancin' in the dark with you between my arms" },
            { time: 172, text: "Barefoot on the grass while listenin' to our favourite song" },
            { time: 179, text: "When I saw you in that dress, lookin' so beautiful" },
            { time: 186, text: "I don't deserve this, darling, you look perfect tonight" },
            { time: 194, text: "..." },
            { time: 200, text: "No, no, no" },
            { time: 203, text: "Mm, oh" },
            { time: 207, text: "Baby, I'm dancin' in the dark with you between my arms" },
            { time: 218, text: "Barefoot on the grass, oh, listenin' to our favourite song" },
            { time: 225, text: "I have faith in what I see, now I know I have met" },
            { time: 231, text: "An angel in person, and she looks perfect" },
            { time: 238, text: "Though I don't deserve this, you look perfect tonight" }
        ]
    },    
    {
        id: 3,
        title: "Unconditionally",
        artist: "Katy Perry",
        album: "Prism",
        albumArtUrl: "https://i.ytimg.com/vi/4NGVxU0qhZ8/maxresdefault.jpg",
        audioSrc: "audio/Katy Perry - Unconditionally.mp3",
        videoBgSrc: "videos/unconditionally_bg.mp4", // This song's special background video path
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0, text: "..." },
            { time: 7.1, text: "Oh no, did I get too close?" },
            { time: 12, text: "Oh, did I almost see what's really on the inside?" },
            { time: 22.6, text: "All your insecurities" },
            { time: 27.3, text: "All the dirty laundry" },
            { time: 30.3, text: "Never made me blink one time" },
            { time: 36.5, text: "Unconditional, unconditionally" },
            { time: 44, text: "I will love you unconditionally" },
            { time: 51, text: "There is no fear now" },
            { time: 55, text: "Let go and just be free" },
            { time: 58.6, text: "I will love you unconditionally" },
            { time: 67, text: "So come just as you are to me" },
            { time: 71, text: "Don't need apologies" },
            { time: 74.9, text: "Know that you are worthy" },
            { time: 82, text: "I'll take your bad days with your good" },
            { time: 86.5, text: "Walk through the storm, I would" },
            { time: 90, text: "I'd do it all because I love you" },
            { time: 96, text: "I love you" },
            { time: 99.5, text: "Unconditional, unconditionally" },
            { time: 107, text: "I will love you unconditionally" },
            { time: 114, text: "There is no fear now" },
            { time: 118, text: "Let go and just be free" },
            { time: 122, text: "I will love you unconditionally" },
            { time: 129.5, text: "So open up your heart and just let it begin" },
            { time: 133, text: "Open up your heart and just let it begin" },
            { time: 136.9, text: "Open up your heart and just let it begin" },
            { time: 141, text: "Open up your heart" },            
            { time: 145, text: "Acceptance is the key to be" },
            { time: 150.6, text: "To be truly free" },
            { time: 154, text: "Will you do the same for me?" },
            { time: 162.5, text: "Unconditional, unconditionally" },
            { time: 170, text: "I will love you unconditionally" },
            { time: 177.8, text: "There is no fear now" },
            { time: 181, text: "Let go and just be free" },
            { time: 185, text: "I will love you unconditionally" },
            { time: 191.5, text: "Oh yeah!" },
            { time: 193.5, text: "..." },
            { time: 200, text: "I will love you (Unconditionally)" },
            { time: 207.8, text: "I will love you" },
            { time: 215, text: "I will love you unconditionally" }
        ]
    },
    {
        id: 4,
        title: "Rewrite the Stars",
        artist: "James Arthur & Anne-Marie",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.ytimg.com/vi/BqGCJUXEqxQ/maxresdefault.jpg",
        audioSrc: "audio/Rewrite The Stars - James Arthur feat. Anne Marie.mp3",
        videoBgSrc: "videos/Anne-Marie & James Arthur - Rewrite The Stars.mp4",
        lyrics: [
            { time: 2, text: "You know I want you" },
            { time: 5, text: "It's not a secret I try to hide" },
            { time: 9, text: "You know you want me" },
            { time: 13, text: "So don't keep sayin' our hands are tied" },
            { time: 17, text: "You claim it's not in the cards" },
            { time: 19, text: "And fate is pullin' you miles away and out of reach from me" },
            { time: 24, text: "But you're here in my heart" },
            { time: 26, text: "So who can stop me if I decide that you're my destiny?" },
            { time: 35, text: "What if we rewrite the stars?" },
            { time: 39, text: "Say you were made to be mine" },
            { time: 42, text: "Nothin' could keep us apart" },
            { time: 46, text: "You'd be the one I was meant to find" },
            { time: 50, text: "It's up to you and it's up to me" },
            { time: 54, text: "No one can say what we get to be" },
            { time: 57, text: "So why don't we rewrite the stars?" },
            { time: 61, text: "Maybe the world could be ours tonight" },
            { time: 67, text: "Ah-oh (No, no, no, no)" },
            { time: 70, text: "Ah-oh (Mm)" },
            { time: 74, text: "You think it's easy" },
            { time: 78, text: "You think I don't wanna run to you, yeah" },
            { time: 82, text: "But there are mountains (There are mountains)" },
            { time: 85, text: "And there are doors that we can't walk through" },
            { time: 89, text: "I know you're wonderin' why" },
            { time: 91, text: "Because we're able to be just you and me within these walls" },
            { time: 97, text: "But when we go outside" },
            { time: 99, text: "You're gonna wake up and see that it was hopeless after all" },
            { time: 107, text: "No one can rewrite the stars" },
            { time: 111, text: "How can you say you'll be mine?" },
            { time: 115, text: "Everything keeps us apart" },
            { time: 119, text: "And I'm not the one you were meant to find" },
            { time: 122, text: "It's not up to you, it's not up to me" },
            { time: 126, text: "When everyone tells us what we can be" },
            { time: 130, text: "And how can we rewrite the stars?" },
            { time: 134, text: "Say that the world can be ours tonight" },
            { time: 139, text: "All I want is to fly with you" },
            { time: 143, text: "All I want is to fall with you" },
            { time: 147, text: "So just give me all of you" },
            { time: 151, text: "It feels impossible" },
            { time: 152.5, text: "It's not impossible" },
            { time: 154, text: "Is it impossible?" },
            { time: 155, text: "Say that it's possible" },
            { time: 159, text: "How do we rewrite the stars?" },
            { time: 162, text: "Say you were made to be mine" },
            { time: 166, text: "And nothin' could keep us apart" },
            { time: 170, text: "'Cause you are the one I was meant to find" },
            { time: 174, text: "It's up to you and it's up to me" },
            { time: 178, text: "No one could say what we get to be" },
            { time: 181, text: "And why don't we rewrite the stars?" },
            { time: 185, text: "Changin' the world to be ours" },
            { time: 191, text: "Ah-oh (No, no, no, no)" },
            { time: 195, text: "Ah-oh (Mm)" },
            { time: 198, text: "You know I want you" },
            { time: 202, text: "It's not a secret I try to hide" },
            { time: 206, text: "But I can't have you" },
            { time: 209, text: "We're bound to break and my hands are tied" }
        ]
    },
    {
        id: 5,
        title: "Message in Bottle",
        artist: "taylor swift",
        album: "OK Computer",
        albumArtUrl: "https://www.songmeaningsandfacts.com/wp-content/uploads/2022/11/Message-in-a-Bottle-by-Taylor-Swift.jpg",
        audioSrc: "audio/Message in Bottle.mp3",
        videoBgSrc: "videos/Message in Bottle.mp4",
        lyrics: [
            { time: 0  ,  text: "Cause you could be the one that I love" },
            { time: 4,  text: "I could be the one that you dream of " },
            { time: 8, text: "A message in a bottle is all I can do" },
            { time: 11, text: "Standin' here, hopin' it gets to you" },
            { time: 100, text: "You could be the one that I keep, and Iu" },
            { time: 100, text: "I could be the reason you can't sleep at night" },
            { time: 100, text: "A mеssage in a bottle is all I can do" },
            { time: 100, text: "Standin' herе, hopin' it gets to you" },
        ]
    },
    {
        id: 6,
        title: "Somebody's Pleasure",
        artist: "Aziz Hedra", 
        album: "Unreleased",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.5fDFhJU8ZYGRlPD4ffPlgAHaHa&pid=Api&P=0&h=220", 
        audioSrc: "audio/Somebodys Pleasure.mp3",
        videoBgSrc: "videos/somebodys_pleasure_bg.mp4",
        lyrics: [
            { time: 0, text: "..." },
            { time: 17, text: "I've been too busy ignoring and hiding" },
            { time: 23, text: "About what my heart actually say" },
            { time: 33, text: "Stay awake while I'm drowning on my thoughts" },
            { time: 40, text: "Sometimes a happiness is just a happiness" },
            { time: 52, text: "I've never been enjoying my serenity" },
            { time: 58, text: "Even if I've got a lot of company" },
            { time: 63, text: "That makes me happy" },
            { time: 67, text: "Soul try to figure it out" },
            { time: 72, text: "From where I've been escaping" },
            { time: 76, text: "Running to end all the sin" },
            { time: 80, text: "Get away from the pressure" },
            { time: 84, text: "Wondering to get a love that is so pure" },
            { time: 93, text: "Gotta have to always make sure" },
            { time: 96, text: "That I'm not just somebody's pleasure" },
            { time: 102, text: "I always pretending and lying" },
            { time: 111, text: "I got used to feel empty" },
            { time: 113, text: "'Cause all I got is unhappy" },
            { time: 117, text: "Happiness, can't I get happiness?" },
            { time: 122, text: "I've never been enjoying my serenity" },
            { time: 127, text: "Even if I've got a lot of company" },
            { time: 134, text: "That makes me happy" },
            { time: 139, text: "And I don't even feel my own pain" },
            { time: 144, text: "Whatever when the storms pouring rain" },
            { time: 151, text: "Feels like a wind" },
            { time: 154, text: "Soul try to figure it out" },
            { time: 158, text: "From where I've been escaping" },
            { time: 163, text: "Running to end all the sin" },
            { time: 167, text: "Get away from the pressure" },
            { time: 171, text: "Wondering to get a love that is so pure" },
            { time: 180, text: "Gotta have to always make sure" },
            { time: 184, text: "That I'm not just somebody's pleasure" },
            { time: 191, text: "I hold imagination" },
            { time: 195, text: "Cover all of the sadness" },
            { time: 200, text: "I don't feel something special" },
            { time: 204, text: "Turn off the phone to get some spatial" },
            { time: 208, text: "Never thought I'd living in true" },
            { time: 212, text: "The truth that has been so blue" },
            { time: 217, text: "It was in a blink of an eye" },
            { time: 220, text: "Find a way how to say goodbye" },
            { time: 224, text: "I've got to take me away from all sadness" },
            { time: 233, text: "Stitch all my wounds, confess all the sins" },
            { time: 237, text: "And took all my insecurities" },
            { time: 241, text: "When will I got the love that is so pure?" },
            { time: 250, text: "Gotta have to always make sure" },
            { time: 254, text: "That I'm not just, I'm not just somebody's pleasure" },
            { time: 262, text: "Gotta have, gotta have to always make sure" },
            { time: 271, text: "I'm not just somebody's pleasure" }
        ]
    },
    {
        id: 7,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "https://i.ytimg.com/vi/fJLQCf4mFP0/hqdefault.jpg",
        audioSrc: "audio/I Wanna Be Yours.mp3",
        videoBgSrc: "videos/i_wanna_be_yours_bg.mp4",
        lyrics: [
            { time: 0, text: "..." },
            { time: 18, text: "I wanna be your vacuum cleaner" },
            { time: 22, text: "Breathing in your dust" },
            { time: 26, text: "I wanna be your Ford Cortina" },
            { time: 29, text: "I will never rust" },
            { time: 32, text: "If you like your coffee hot" },
            { time: 36, text: "Let me be your coffee pot" },
            { time: 39, text: "You call the shots, babe" },
            { time: 42, text: "I just wanna be yours" },
            
            { time: 46, text: "Secrets I have held in my heart" },
            { time: 50, text: "Are harder to hide than I thought" },
            { time: 54, text: "Maybe I just wanna be yours" },
            { time: 57, text: "I wanna be yours, I wanna be yours" },
            { time: 63, text: "Wanna be yours, wanna be yours, wanna be yours" },

            { time: 75, text: "Let me be your 'leccy meter and I'll never run out" },
            { time: 82, text: "Let me be the portable heater that you'll get cold without" },
            { time: 90, text: "I wanna be your setting lotion (wanna be)" },
            { time: 93, text: "Hold your hair in deep devotion (how deep?)" },
            { time: 95.9, text: "At least as deep as the Pacific Ocean" },
            { time: 100, text: "I wanna be yours" },

            { time: 103, text: "Secrets I have held in my heart" },
            { time: 106.5, text: "Are harder to hide than I thought" },
            { time: 111, text: "Maybe I just wanna be yours" },
            { time: 114, text: "I wanna be yours, I wanna be yours" },
            { time: 119, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 130, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 141, text: "Wanna be yours, wanna be yours" },

            { time: 146, text: "I wanna be your vacuum cleaner (Wanna be yours)" },
            { time: 150, text: "Breathing in your dust (Wanna be yours)" },
            { time: 153, text: "I wanna be your Ford Cortina (Wanna be yours)" },
            { time: 157, text: "I will never rust (Wanna be yours)" },
            { time: 161, text: "I just wanna be yours (Wanna be yours)" },
            { time: 163, text: "I just wanna be yours (Wanna be yours)" },
            { time: 167, text: "I just wanna be yours (Wanna be yours)" }
        ]
    },
    {
        id: 8,
        title: "Welcome and Goodbye",
        artist: "Dream, Ivory",
        album: "Welcome and Goodbye",
        albumArtUrl: "https://cdn-images.dzcdn.net/images/cover/5f4f2cbf313f2f604783a7c608727b83/500x500-000000-80-0-0.jpg",
        audioSrc: "audio/Dream, Ivory - welcome and goodbye.mp3",
        videoBgSrc: "videos/Dream, Ivory - welcome and goodbye.mp4",
        lyrics: [
            { time: 0, text: "..." },
            { time: 42, text: "Through it all once again, came to know my only friend" },
            { time: 49, text: "Lost control, can't begin, I seek within" },
            { time: 60, text: "To feel the warmth brought within your skin" },
            { time: 63, text: "Did you know, for how it seemed" },
            { time: 74, text: "I should've stayed and let you be" },
            { time: 81, text: "Run into my heart so carelessly" },
            { time: 87, text: "That's the reason I'm afraid" },
            { time: 91, text: "You're thoughts that can't be tamed" },
            { time: 94, text: "And I'm trying to be sane" },
            { time: 101, text: "And I'm trying to be sane" },
            { time: 108, text: "And I'm trying to be sane" }
        ]
    },
    {
        id: 9,
        title: "Mr Loverman",
        artist: "Ricky Montgomery",
        album: "Montgomery Ricky",
        albumArtUrl: "https://cdn-images.dzcdn.net/images/cover/6f16a46983bb9d9b8ed17065d68db216/1900x1900-000000-80-0-0.jpg",
        audioSrc: "audio/Ricky Montgomery - Mr Loverman.mp3",
        videoBgSrc: "videos/Ricky Montgomery - Mr Loverman.mp4",
        lyrics: [
            { time: 1, text: "I'm headed straight for the floor" },
            { time: 7, text: "The alcohol's served its tour" },
            { time: 12, text: "And it's headed straight for my skin" },
            { time: 17, text: "Leaving me daft and dim" },
            { time: 23, text: "I've got this shake in my legs" },
            { time: 29, text: "Shaking the thoughts from my head" },
            { time: 34, text: "But who put these waves in the door?" },
            { time: 40, text: "I crack and out I pour" },
            { time: 45, text: "I'm Mr. Loverman" },
            { time: 51, text: "And I miss my lover, man" },
            { time: 56, text: "I'm Mr. Loverman" },
            { time: 61, text: "Oh, and I miss my lover" },
            { time: 67, text: "The ways in which you talk to me" },
            { time: 72, text: "Have me wishin' I were gone" },
            { time: 79, text: "The ways that you say my name" },
            { time: 82.7, text: "Have me runnin' on and on" },
            { time: 90, text: "Oh, I'm crampin' up, I'm crampin' up" },
            { time: 101.5, text: "But you're crackin' up, you're crackin' up" },
            { time: 112, text: "I'm Mr. Loverman" },
            { time: 117, text: "And I miss my loverman" },
            { time: 123, text: "I'm Mr. Loverman" },
            { time: 127, text: "Oh, and I miss my lover" },
            { time: 136, text: "I've shattered now, I'm spilling out" },
            { time: 141, text: "Upon this linoleum ground (Mr. Loverman)" },
            { time: 147, text: "I'm reeling in my brain again" },
            { time: 152, text: "Before it can get back to you (Mr. Loverman)" },
            { time: 156.5, text: "Oh, what am I supposed to do without you?" },
            { time: 168, text: "I'm Mr. Loverman" },
            { time: 173, text: "And I miss my lover, man (I miss my lover)" },
            { time: 179, text: "I'm Mr. Loverman (oh-oh)" },
            { time: 183, text: "Oh, and I miss my lover (Mr. Loverman)" },
            { time: 190, text: "I'm Mr. Loverman (oh-oh)" },
            { time: 195, text: "And I miss my loverman" },
            { time: 200, text: "I'm Mr. Loverman" },
            { time: 206, text: "And I miss my lover" }
        ]
    },
    {
        id: 10,
        title: "Where We Are",
        artist: "One Direction",
        album: "Midnight Memories (Deluxe Edition)",
        albumArtUrl: "https://static.wikia.nocookie.net/onedirection/images/9/98/Where_We_Are_%28Single%29_-_One_Direction.jpg/revision/latest?cb=20241008205147",
        audioSrc: "audio/One Direction - Where We Are.mp3",
        videoBgSrc: "videos/Where We Are.mp4",
        lyrics: [
            { time: 0, text: "..." },
            { time: 4, text: "Remember when we would stay out too late" },
            { time: 8, text: "We were young, havin' fun, made mistakes" },
            { time: 12, text: "Did we ever know? Did we ever know?" },
            { time: 15, text: "Did we ever know? Yeah" },
            { time: 20, text: "All the things we'd just think of and say" },
            { time: 24, text: "Never wrong, always right, not afraid" },
            { time: 27, text: "Did we ever know? Did we ever know?" },
            { time: 30.5, text: "Did we ever know?" },
            { time: 35, text: "Is it all inside of my head?" },
            { time: 38, text: "Maybe you still think I don't care" },
            { time: 42.5, text: "But all I need is you" },
            { time: 45, text: "Yeah, you know it's true, yeah, you know it's true" },
            { time: 49.5, text: "Forget about where we are and let go" },
            { time: 55, text: "We're so close" },
            { time: 57, text: "If you don't know where to start, just hold on" },
            { time: 62, text: "And don't run, no" },
            { time: 67, text: "We're looking back, we messed around" },
            { time: 70, text: "But that was then and this is now" },
            { time: 73, text: "All we need's enough love to hold us" },
            { time: 80, text: "Where we are" },
            { time: 83, text: "Summer days rushing by you and me" },
            { time: 87, text: "Makes it hard it to see underneath" },
            { time: 90, text: "Did we ever know?" },
            { time: 92, text: "Did we ever know?" },
            { time: 94, text: "Did we ever know?" },
            { time: 98, text: "This is all inside of my head" },
            { time: 102, text: "Maybe you still think I don't care" },
            { time: 105.5, text: "But all I need is you," },
            { time: 108, text: "yeah you know it's true" },
            { time: 110, text: "Yeah you know it's true, forget about" },
            { time: 114, text: "Where we are and let go" },
            { time: 117.5, text: "We're so close if you don't know" },
            { time: 121, text: "Where to start just hold on" },
            { time: 126, text: "And don't run,no" },
            { time: 129, text: "We're looking back,we messed around" },
            { time: 133, text: "But that was then and this is now" },
            { time: 137, text: "All we need enough love to hold us" },
            { time: 142.5, text: "Where we are" },
            { time: 148.5, text: "But that was then and this is now" },
            { time: 152, text: "All we need enough love to hold us" },
            { time: 158, text: "Where we are (where we are, where we are, where we are, where we are)" },
            { time: 168, text: "With closed eyes and opened mind" },
            { time: 172, text: "We could be there,we could be there" },
            { time: 176, text: "But this time, let's cross the line" },
            { time: 179, text: "Gonna see it, gonna see it" },
            { time: 184, text: "Forget about Where we are and let go" },
            { time: 189, text: "We're so close if you don't know (if you don't know)" },
            { time: 192.5, text: "Where to start just hold on And don't run,no (don't run no)" },
            { time: 201, text: "We're looking back,we messed around" },
            { time: 204, text: "But that was then and this is now" },
            { time: 208, text: "All we need enough love to hold us" },
            { time: 214.5, text: "Where we are" }
        ]
    },
    {
        id: 11,
        title: "Let Down",
        artist: "Radiohead",
        album: "OK Computer",
        albumArtUrl: "https://images.genius.com/ea1fda114f5091bce67f87cf8437b647.1000x1000x1.png",
        audioSrc: "audio/Radiohead - Let Down.mp3",
        videoBgSrc: "videos/letdown.mp4",
        lyrics: [
            { time: 0, text: "..." },
            { time: 22, text: "Transport, motorways and tramlines" },
            { time: 29, text: "Starting and then stopping" },
            { time: 34, text: "Taking off and landing" },
            { time: 39, text: "The emptiest of feelings" },
            { time: 43, text: "Disappointed people" },
            { time: 48, text: "Clinging onto bottles" },
            { time: 52, text: "And when it comes it's so, so disappointing" },
            { time: 60, text: "Let down and hanging around" },
            { time: 67, text: "Crushed like a bug in the ground" },
            { time: 74, text: "Let down and hanging around" },
            { time: 91, text: "Shell smashed, juices flowing" },
            { time: 95, text: "Wings twitch, legs are going" },
            { time: 100, text: "Don't get sentimental" },
            { time: 105, text: "It always ends up drivel" },
            { time: 109, text: "One day I am gonna grow wings" },
            { time: 116, text: "A chemical reaction" },
            { time: 121, text: "Hysterical and useless" },
            { time: 126, text: "Hysterical and" },
            { time: 127.5, text: "Let down and hanging around" },
            { time: 135, text: "Crushed like a bug in the ground" },
            { time: 142, text: "Let down and hanging around" },
            { time: 146.5, text: "..." },
            { time: 187, text: "Let down again" },
            { time: 197, text: "Let down again" },
            { time: 206, text: "Let down again" },
            { time: 215, text: "..." },
            { time: 222, text: "You know, you know where you are with" },
            { time: 228, text: "You know where you are with" },
            { time: 233, text: "Floor collapses, floating" },
            { time: 238, text: "Bouncing back and" },
            { time: 240, text: "One day, I am gonna grow wings" },
            { time: 247, text: "A chemical reaction (you know where you are)" },
            { time: 252, text: "Hysterical and useless (you know where you are)" },
            { time: 256, text: "Hysterical and (you know where you are)" },
            { time: 259, text: "Let down and hanging around" },
            { time: 265, text: "Crushed like a bug in the ground" },
            { time: 272, text: "Let down and hanging around" }

        ]
    },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();
