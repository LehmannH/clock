<body>
<div class="input form">
    <?php echo $this->Html->script('jquery-1.11.1'); // Include jQuery library ?>
    <?php echo $this->Form->create('Clock'); ?>
    <fieldset>
        <legend><?php echo __('Gehaltsangabe'); ?></legend>

        <?php
        echo $this->Form->input('gehalt');
        ?>
    </fieldset>
    <?php echo $this->Form->end('Weiter'); ?>
    <?php echo "The time is " . date("H:i:s"); ?>
    <p>
    <?php echo $this->Time->format('+0 day', '%H:%M:%S'); ?>
    </p>
</div>
<?php echo $this->Js->writeBuffer(); // Write cached scripts ?>
</body>