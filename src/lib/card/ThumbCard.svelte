<script>
  export let src;
  export let alt;
</script>

<!---sourced from https://inclusive-components.design/cards/-->

<li class="flex shadow-md flex-col hover:shadow-xl pointer">
  <div class="img">
  <img {src} {alt} />
  </div>
  <div class="flex flex-col flex-grow mt-0.25">
  <p>lorem ipsum</p>
  <small class="mt-auto mb-0.25">by <slot name="author"><span>Theo Idris</span></slot></small>
  </div>
  </li>