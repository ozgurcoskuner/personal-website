  // Animations

    // Profile picture animation
    const observerMe = new IntersectionObserver(entries => {
  
        entries.forEach(entry => {
         
          if (entry.isIntersecting) {
           
            entry.target.classList.add('me-animation');
            
          }
        });
      });
      
      observerMe.observe(document.querySelector('.me'));
      
        // Info animation
      const observerInfo = new IntersectionObserver(entries => {
        
        entries.forEach(entry => {
         
          if (entry.isIntersecting) {
            
            
            entry.target.classList.add('info-animation');
          }
        });
      });
      
      observerInfo.observe(document.querySelector('.info'));
      
      
      // Skills animation
        
      const observerSkills = new IntersectionObserver(entries => {
        
        entries.forEach(entry => {
         
          if (entry.isIntersecting) {
            
            
            entry.target.classList.add('skills-animation');
          }
        });
      });
      
      observerSkills.observe(document.querySelector('.skills'));

