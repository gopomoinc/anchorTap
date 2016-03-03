## [anchorTap]()

A simple URL update tap module based on Bootstrap tap

### How to use ?

Include Bootstrap JS and anchorTap.js

```html
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="js/anchorTab.js"></script>
<script type="text/javascript">
$(function(){
  // default tab selector is .nav, but can given any selector.
  anchorTab.init({
    tabSelector: '.nav'
  });
});
</script>
```

![anchorTab]()
