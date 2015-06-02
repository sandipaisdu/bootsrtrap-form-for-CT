

$('.probeProbe').bootstrapSwitch('state', false);

$('.probeProbe').on('switchChange.bootstrapSwitch', function (event, state) {

    alert(this);
    alert(event);
    alert(state);
});

