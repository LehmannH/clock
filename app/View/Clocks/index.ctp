<head>
    <?php echo $this->Html->script('jquery-1.11.1'); // Include jQuery library ?>
</head>
<body onload="window.setTimeout('ZeitAnzeigen()', 1000);window.setTimeout('ZeitAnzeige()', 1000);window.setTimeout('getinhalt()', 100);">




<div class="input form">

    <?php echo $this->Form->create('Clock'); ?>
    <div id="Uhr" class="Uhr">&nbsp;</div>
    <div id="UhrG" class="UhrG">&nbsp;</div>
    <div id="Inhalt" class="Inhalt">&nbsp;</div>
    <p>
        <div id="Gehalt" class="Gehalt">&nbsp;
            <?php if(isset($gehalt)){ echo $gehalt;} ?>
        </div>
    </p>
        <fieldset>
        <legend><?php echo __('Gehaltsangabe.'); ?></legend>

        <?php
        echo $this->Form->input('gehalt');
        ?>


    </fieldset>

    <?php echo $this->Form->end('Weiter', array()); ?>
    <?php echo $this->Html->script('dhtml.js'); ?>
    <?php echo $this->Html->script('clock.js'); ?>
    <?php echo $this->Html->script('gehalt.js'); ?>
    <?php echo $this->Html->script('getinhalt.js'); ?>

<?php echo $this->Js->writeBuffer(); // Write cached scripts ?>
</div>

</body>