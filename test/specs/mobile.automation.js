describe('Open Application',() => {
    it('should open apps', async() => {
        const inputName = await $('[id="com.fghilmany.dietmealapp:id/et_name"]');
        await inputName.setValue('Permana');

        const inputWeight = await $('[id="com.fghilmany.dietmealapp:id/et_weight"]');
        await inputWeight.setValue('80');

        const inputHeight = await $('[id="com.fghilmany.dietmealapp:id/et_height"]');
        await inputHeight.setValue('180');

        await $('[id="com.fghilmany.dietmealapp:id/rb_male"]').click();

        await $('[id="com.fghilmany.dietmealapp:id/bt_next"]').click();

        await $('[id="com.fghilmany.dietmealapp:id/rb_very_very_low"]').click();

        await $('[id="com.fghilmany.dietmealapp:id/bt_finish"]').click();
        
    })
})