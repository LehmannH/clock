<div class="input form">
<?php echo $this->Time->format('H:i:s') ?>
    <?php echo $this->Form->create('Clock'); ?>
    <fieldset>
        <legend><?php echo __('Gehaltsangabe'); ?></legend>

        <?php
        echo $this->Form->input('gehalt');
        ?>
    </fieldset>
    <?php echo $this->Form->end('Weiter'); ?>
</div>
