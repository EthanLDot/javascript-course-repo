# Overview of my Javascript Clock

## For Bit Project's Javascript with Twilio bootcamp, I had to privilege of making a simple digital/analog clock website.

![image-20210306014512422](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306014512422.png)

This project can tell the user the time, key features include:

- Availability of digital and analog forms.
- Choice between all US time zones.
- Day and night mode
- Mood lighting!!! (with all colors of the rainbow)



A bit about myself - I was interested in web design and had taken some HTML/CSS/Javascript courses on Codecademy, but I didn't like their spoon-feeding teaching model and it was hard to see how to bring these three wonderful languages together. So one of the biggest takeaways was that I learned how to integrate all of these components together into a beautiful site. Additionally, I had used GitHub a few times in the past but it was always a sloppy and spontaneous process. This course's structure has made me develop and push my projects in a more organized and professional manner, which are definitely good habits to have. I also appreciate how this course helped me practice newer concepts that Codecademy had glossed over, such as CSS variables and changing values between HTML, CSS, and Javascript files.



While all projects within the boot camp have to follow certain standards, I tried making mine a bit different through the availability of a day/night mode as well as a mood lighting animation. I'll cover in more detail how these work below...



# Tutorial

![image-20210306141958282](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306141958282.png)

I have covered the key features of my work above. Overall, I think someone with beginning-intermediate experience can replicate my work fairly well. I hope users enjoy the analog/digital switch setup and the graphics.



The digital clock didn't need a lot of HTML elements, but the analog clock did:

![image-20210306142441831](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306142441831.png)

For the digital clock I could just print the time using a Date object and then make smaller adjustments:

![image-20210306142540219](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306142540219.png)

but for the analog clock I had to write a function and a CSS variable that would continually adjust my clock hands based on a time ratio (CSS variable not shown):

![image-20210306142737613](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306142737613.png)

![image-20210306143040007](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306143040007.png)![image-20210306143104702](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306143104702.png)

For time zones, I made good use of HTML forms:

![image-20210306142917932](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306142917932.png)

This then modifies a variable in the js file to adjust the clock depending on what time zone is selected.

![image-20210306143010683](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306143010683.png)

![image-20210306143217402](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306143217402.png)

The clocks themselves can be styled with adequate knowledge of colors, borders, and fonts. There are some interesting stylistic choices I made however:

## Day/Night

Day/night modes are increasingly common online, so here is mine.

The HTML file itself has a form that would change the background when one of the radio buttons are clicked.![image-20210306143704756](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306143704756.png)

This is tied to a JS function that adjusts the color scheme:

![image-20210306143747588](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306143747588.png)



**Day**

![image-20210306144129550](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306144129550.png)

![image-20210306144139942](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306144139942.png)



## Mood Lighting

The mood lighting itself is not static - the color continuously changes. To achieve this effect, I first created a special shadow effect using webkit-box-shadow, as seen in the CSS file.

![image-20210306144255306](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306144255306.png)

To change it, however, I took advantage of CSS's animation feature, where we would cycle through the colors of the rainbow infinitely, for 15 seconds at a time.

![image-20210306144359998](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306144359998.png)

Below is are the key frames I established for the animation.

![image-20210306144436690](C:\Users\ethan\AppData\Roaming\Typora\typora-user-images\image-20210306144436690.png)





# Reflection

I am very grateful for this experience in that it helped me get experience building a more complex website, not just one with a bunch of text and colors. Working with forms and animations, as well as having the JS, HTML, and CSS files interact with each other are all new content to me.  I think making the analog clock was the hardest part because that meant continually adjusting the hands of the clock and telling it how and where to rotate. The hands especially needed to make good use of Javascript to work. My favorite parts were designing the animation and the different color modes at the end; I hope Bit Project does more to make their assignments much more open-ended. In the future, I would improve this site by using a color wheel rather than just day/night modes and including music, more fonts, and a cleaner, more vertical layout.

