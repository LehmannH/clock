<head>
</head>
<body onload="window.setTimeout('ZeitAnzeigen()', 1000)">


<div id="Uhr" class="Uhr">&nbsp;</div>
<div id="RestDerSeite" class="RestDerSeite">

</div>


<div class="input form">
    <?php echo $this->Html->script('jquery-1.11.1'); // Include jQuery library ?>
    <?php echo $this->Form->create('Clock'); ?>
    <fieldset>
        <legend><?php echo __('Gehaltsangabe.'); ?></legend>

        <?php
        echo $this->Form->input('gehalt');
        ?>
    </fieldset>
    <?php echo $this->Form->end('Weiter'); ?>
    <?php echo "The time is " . date("H:i:s"); ?>
    <?php echo $this->Html->script('dhtml.js'); ?>
    <?php echo $this->Html->script('clock.js'); ?>


<?php echo $this->Js->writeBuffer(); // Write cached scripts ?>
</div>
</body>