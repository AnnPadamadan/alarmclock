I wanted to make an alarm clock using p5js, but I couldn't find something like the time library in Python. 

So, I got creative and created two sprites outside of the screen that the user can see. When the alarm is set, I made one of the sprites start moving starting from a 
specified distance (based on the time) away from the other sprite. That meant that I could check when they touched each other (which would be when the time is up) in 
order to ring the timer.
