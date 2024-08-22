var init = function(){
    var isMobile = navigator.userAgent &&
      navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
    var isSmall = window.innerWidth < 1000;
  
    var ps = new ParticleSlider({
      ptlGap: isMobile || isSmall ? 1 : 0,
      ptlSize: isMobile || isSmall ? 1 : 1,
      width: window.innerWidth,
      height: window.innerHeight,
      noise: 1e9,
    //   monochrome: false,
    //   showArrowControls: false,
      gravity: 1000,
      mouseForce: 5e4,
      renderer: 'webgl',
    });
  
    var gui = new dat.GUI();
    gui.add(ps, 'ptlGap').min(0).max(1000).step(1).onChange(function(){
      ps.init(true);
    });
    gui.add(ps, 'ptlSize').min(1).max(1000).step(1).onChange(function(){
      ps.init(true);
    });
    gui.add(ps, 'restless');
    gui.addColor(ps, 'color').onChange(function(value){
      ps.monochrome = true;
      ps.setColor(value);
      ps.init(true);
    });
  
  
    (window.addEventListener
     ? window.addEventListener('click', function(){ps.init(true)}, false)
     : window.onclick = function(){ps.init(true)});
  }
  
  var initParticleSlider = function(){
    var psScript = document.createElement('script');
    (psScript.addEventListener
      ? psScript.addEventListener('load', init, false)
      : psScript.onload = init);
    psScript.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
    psScript.setAttribute('type', 'text/javascript');
    document.body.appendChild(psScript);
  }
  
  (window.addEventListener
    ? window.addEventListener('load', initParticleSlider, false)
    : window.onload = initParticleSlider);
  
