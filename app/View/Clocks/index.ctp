<div class="input form">
    <?php echo $this->Form->create('Clock'); ?>
    <fieldset>
        <legend><?php echo __('Gehaltsangabe'); ?></legend>

        <?php
        echo $this->Form->input('gehalt');
        ?>
    </fieldset>
    <?php echo $this->Form->end('Weiter'); ?>
    <?php echo "The time is " . date("H:i:s"); ?>
</div>
