# Adding SAAIL Lab Link to Your Personal Website

## Where to Add the Link

In your Research tab (data-tab="4"), you should add the SAAIL Lab link in the "Current Projects" section.

## HTML Code to Add

Find this section in your HTML (around line 1200-1300):

```html
<section>
   <h3>Current Projects</h3>
   <ul>
      <li><strong>AI for Smart Agriculture and Sustainability:</strong> Developing and applying AI techniques to enhance agricultural practices, improve resource management, and promote sustainability.</li>
      <li><strong>AI for Medical Imaging - Placental Imaging:</strong>  Focusing on the application of AI, particularly computer vision and machine learning, to analyze placental images for improved diagnostics and monitoring.</li>
      <li><strong>Swahili Speech and Text Processing:</strong>  Researching and developing NLP tools and techniques specifically for the Swahili language, with potential applications in both agriculture and healthcare.</li>
      <li><strong>Blockchain for Spice Supply Chain:</strong> Investigating the use of blockchain technology to improve transparency, traceability, and efficiency in the spice supply chain.</li>
   </ul>
</section>
```

## Add This After the Current Projects Section

Add this new section right after the Current Projects section:

```html
<section>
   <h3>Research Laboratory</h3>
   <ul>
      <li><strong><a href="https://inyalala.github.io/saaillab.github.io/" target="_blank" rel="noopener noreferrer">SAAIL Lab - Sustainable AI for Agriculture & Intelligent Livelihoods</a></strong><br>
      Leading the SAAIL Lab at IIT Madras Zanzibar, focusing on transformative AI solutions for East Africa through ethical research, innovative partnerships, and sustainable development. The lab conducts cutting-edge research in AI for agriculture, intelligent healthcare, and responsible AI frameworks.</li>
   </ul>
</section>
```

## Alternative: Add to Current Projects List

Or you can add it as the first item in your existing Current Projects list:

```html
<section>
   <h3>Current Projects</h3>
   <ul>
      <li><strong><a href="https://inyalala.github.io/saaillab.github.io/" target="_blank" rel="noopener noreferrer">SAAIL Lab</a> - Sustainable AI for Agriculture & Intelligent Livelihoods:</strong> Leading a comprehensive research laboratory at IIT Madras Zanzibar focusing on transformative AI solutions for East Africa, with active projects in precision agriculture, medical imaging, and responsible AI frameworks.</li>
      <li><strong>AI for Smart Agriculture and Sustainability:</strong> Developing and applying AI techniques to enhance agricultural practices, improve resource management, and promote sustainability.</li>
      <!-- ... rest of your existing projects ... -->
   </ul>
</section>
```

## Recommended Placement

I recommend adding it as a separate "Research Laboratory" section because:
1. It highlights your leadership role
2. It's more prominent than being buried in a list
3. It clearly shows the scope of your research activities
4. It provides context for your other projects

## Final Result

Visitors to your personal website will see:
- A clear link to your SAAIL Lab website
- Understanding of your research leadership role
- Easy navigation between your personal portfolio and lab website
- Professional presentation of your research activities

The link will open in a new tab so visitors don't lose your personal website.