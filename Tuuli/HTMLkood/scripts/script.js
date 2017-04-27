"use strict";

<body><script type="text/javascript">
var kuupaev = new Date();
var paev = kuupaev.getDate();
var kuu = kuupaev.getMonth();
var aasta = kuupaev.getFullYear();
document.write("<b>" + paev + "/" + (kuu + 1) + "/" + aasta + "</b>");
</script>
<p>
<script type="text/javascript">
kasutaja="rinde";
server="tlu.ee";
document.write('Minu e-posti aadress on: ');
document.write('<a href="mailto:' + kasutaja + '@' + server + '">');
document.write(kasutaja + '@' + server +'</a>');
</script>
</p>