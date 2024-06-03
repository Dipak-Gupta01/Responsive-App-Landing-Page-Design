document.addEventListener('DOMContentLoaded', () => {
    const featuresSection = document.querySelector('#features');
    const gallerySection = document.querySelector('#gallery');
    const testimonialsSection = document.querySelector('#testimonials');
    const pricingSection = document.querySelector('#pricing');
  
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        populateFeatures(data.features);
        populateGallery(data.gallery);
        populateTestimonials(data.testimonials);
        populatePricing(data.pricing);
      });
  
    function populateFeatures(features) {
      const featuresList = document.createElement('ul');
      features.forEach(feature => {
        const featureItem = document.createElement('li');
        featureItem.textContent = feature;
        featuresList.appendChild(featureItem);
      });
      featuresSection.appendChild(featuresList);
    }
  
    function populateGallery(images) {
      const galleryImages = document.createElement('div');
      galleryImages.className = 'gallery-images';
      images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        galleryImages.appendChild(img);
      });
      gallerySection.appendChild(galleryImages);
    }
  
    function populateTestimonials(testimonials) {
      const testimonialsList = document.createElement('div');
      testimonialsList.className = 'testimonials-list';
      testimonials.forEach(testimonial => {
        const testimonialItem = document.createElement('div');
        testimonialItem.className = 'testimonial';
        testimonialItem.textContent = testimonial;
        testimonialsList.appendChild(testimonialItem);
      });
      testimonialsSection.appendChild(testimonialsList);
    }
  
    function populatePricing(plans) {
      const pricingPlans = document.createElement('div');
      pricingPlans.className = 'pricing-plans';
      plans.forEach(plan => {
        const planItem = document.createElement('div');
        planItem.className = 'plan';
        planItem.innerHTML = `
          <h3>${plan.name}</h3>
          <p>${plan.price}</p>
          <ul>
            ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
          <button>Sign Up</button>
        `;
        pricingPlans.appendChild(planItem);
      });
      pricingSection.appendChild(pricingPlans);
    }
  });
  