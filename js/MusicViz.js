var midiFiles = [ "./assets/midi/sym40-1.mid", "./assets/midi/rondo.mid", "./assets/midi/beet.mid", "./assets/midi/swmain.mid", "./assets/midi/clairdelune.mid"];
var songNames = ["Symphony No. 40 - First Movement", "Piano Concerto No.5 in Eb, Op.73 - Movement 3", "Symphony No. 5", "Star Wars Main Theme", "Clair De Lune"];
var composers = ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Ludwig van Beethoven", "John Williams", "Claude Debussy"];

var numOfSongs = midiFiles.length;
var songIndex = 0;

var percussionParts = [];
var stringParts = [];
var brassParts = [];
var woodwindParts = [];

var piano = SampleLibrary.load({
    instruments: 'piano',
    baseUrl: "./assets/samples/"
});

var ensemble = new Tone.Sampler({
    'A0': 'A0.mp3',
    'A1': 'A1.mp3',
    'A2': 'A2.mp3',
    'A3': 'A3.mp3',
    'A4': 'A4.mp3',
    'A5': 'A5.mp3',
    'A6': 'A6.mp3',
    'A7': 'A7.mp3',

    'G#1': 'Ab1.mp3',
    'G#2': 'Ab2.mp3',
    'G#3': 'Ab3.mp3',
    'G#4': 'Ab4.mp3',
    'G#5': 'Ab5.mp3',
    'G#6': 'Ab6.mp3',
    'G#7': 'Ab7.mp3',

    'B0': 'B0.mp3',
    'B1': 'B1.mp3',
    'B2': 'B2.mp3',
    'B3': 'B3.mp3',
    'B4': 'B4.mp3',
    'B5': 'B5.mp3',
    'B6': 'B6.mp3',
    'B7': 'B7.mp3',

    'A#0': 'Bb0.mp3',
    'A#1': 'Bb1.mp3',
    'A#2': 'Bb2.mp3',
    'A#3': 'Bb3.mp3',
    'A#4': 'Bb4.mp3',
    'A#5': 'Bb5.mp3',
    'A#6': 'Bb6.mp3',
    'A#7': 'Bb7.mp3',

    'C1': 'C1.mp3',
    'C2': 'C2.mp3',
    'C3': 'C3.mp3',
    'C4': 'C4.mp3',
    'C5': 'C5.mp3',
    'C6': 'C6.mp3',
    'C7': 'C7.mp3',

    'D1': 'D1.mp3',
    'D2': 'D2.mp3',
    'D3': 'D3.mp3',
    'D4': 'D4.mp3',
    'D5': 'D5.mp3',
    'D6': 'D6.mp3',
    'D7': 'D7.mp3',

    'C#1': 'Db1.mp3',
    'C#2': 'Db2.mp3',
    'C#3': 'Db3.mp3',
    'C#4': 'Db4.mp3',
    'C#5': 'Db5.mp3',
    'C#6': 'Db6.mp3',
    'C#7': 'Db7.mp3',

    'E1': 'E1.mp3',
    'E2': 'E2.mp3',
    'E3': 'E3.mp3',
    'E4': 'E4.mp3',
    'E5': 'E5.mp3',
    'E6': 'E6.mp3',
    'E7': 'E7.mp3',

    'D#1': 'Eb1.mp3',
    'D#2': 'Eb2.mp3',
    'D#3': 'Eb3.mp3',
    'D#4': 'Eb4.mp3',
    'D#5': 'Eb5.mp3',
    'D#6': 'Eb6.mp3',
    'D#7': 'Eb7.mp3',

    'F1': 'F1.mp3',
    'F2': 'F2.mp3',
    'F3': 'F3.mp3',
    'F4': 'F4.mp3',
    'F5': 'F5.mp3',
    'F6': 'F6.mp3',
    'F7': 'F7.mp3',

    'G1': 'G1.mp3',
    'G2': 'G2.mp3',
    'G3': 'G3.mp3',
    'G4': 'G4.mp3',
    'G5': 'G5.mp3',
    'G6': 'G6.mp3',
    'G7': 'G7.mp3',

    'F#1': 'Gb1.mp3',
    'F#2': 'Gb2.mp3',
    'F#3': 'Gb3.mp3',
    'F#4': 'Gb4.mp3',
    'F#5': 'Gb5.mp3',
    'F#6': 'Gb6.mp3',
    'F#7': 'Gb7.mp3',
}, {
    baseUrl: "./assets/samples/ensemble/"
    }
);

var brass = new Tone.Sampler({
    'A0': 'A0.mp3',
    'A1': 'A1.mp3',
    'A2': 'A2.mp3',
    'A3': 'A3.mp3',
    'A4': 'A4.mp3',
    'A5': 'A5.mp3',
    'A6': 'A6.mp3',
    'A7': 'A7.mp3',

    'G#1': 'Ab1.mp3',
    'G#2': 'Ab2.mp3',
    'G#3': 'Ab3.mp3',
    'G#4': 'Ab4.mp3',
    'G#5': 'Ab5.mp3',
    'G#6': 'Ab6.mp3',
    'G#7': 'Ab7.mp3',

    'B0': 'B0.mp3',
    'B1': 'B1.mp3',
    'B2': 'B2.mp3',
    'B3': 'B3.mp3',
    'B4': 'B4.mp3',
    'B5': 'B5.mp3',
    'B6': 'B6.mp3',
    'B7': 'B7.mp3',

    'A#0': 'Bb0.mp3',
    'A#1': 'Bb1.mp3',
    'A#2': 'Bb2.mp3',
    'A#3': 'Bb3.mp3',
    'A#4': 'Bb4.mp3',
    'A#5': 'Bb5.mp3',
    'A#6': 'Bb6.mp3',
    'A#7': 'Bb7.mp3',

    'C1': 'C1.mp3',
    'C2': 'C2.mp3',
    'C3': 'C3.mp3',
    'C4': 'C4.mp3',
    'C5': 'C5.mp3',
    'C6': 'C6.mp3',
    'C7': 'C7.mp3',

    'D1': 'D1.mp3',
    'D2': 'D2.mp3',
    'D3': 'D3.mp3',
    'D4': 'D4.mp3',
    'D5': 'D5.mp3',
    'D6': 'D6.mp3',
    'D7': 'D7.mp3',

    'C#1': 'Db1.mp3',
    'C#2': 'Db2.mp3',
    'C#3': 'Db3.mp3',
    'C#4': 'Db4.mp3',
    'C#5': 'Db5.mp3',
    'C#6': 'Db6.mp3',
    'C#7': 'Db7.mp3',

    'E1': 'E1.mp3',
    'E2': 'E2.mp3',
    'E3': 'E3.mp3',
    'E4': 'E4.mp3',
    'E5': 'E5.mp3',
    'E6': 'E6.mp3',
    'E7': 'E7.mp3',

    'D#1': 'Eb1.mp3',
    'D#2': 'Eb2.mp3',
    'D#3': 'Eb3.mp3',
    'D#4': 'Eb4.mp3',
    'D#5': 'Eb5.mp3',
    'D#6': 'Eb6.mp3',
    'D#7': 'Eb7.mp3',

    'F1': 'F1.mp3',
    'F2': 'F2.mp3',
    'F3': 'F3.mp3',
    'F4': 'F4.mp3',
    'F5': 'F5.mp3',
    'F6': 'F6.mp3',
    'F7': 'F7.mp3',

    'G1': 'G1.mp3',
    'G2': 'G2.mp3',
    'G3': 'G3.mp3',
    'G4': 'G4.mp3',
    'G5': 'G5.mp3',
    'G6': 'G6.mp3',
    'G7': 'G7.mp3',

    'F#1': 'Gb1.mp3',
    'F#2': 'Gb2.mp3',
    'F#3': 'Gb3.mp3',
    'F#4': 'Gb4.mp3',
    'F#5': 'Gb5.mp3',
    'F#6': 'Gb6.mp3',
    'F#7': 'Gb7.mp3',
}, {
    baseUrl: "./assets/samples/brass/"
    }
);

var flute = new Tone.Sampler({
    'A0': 'A0.mp3',
    'A1': 'A1.mp3',
    'A2': 'A2.mp3',
    'A3': 'A3.mp3',
    'A4': 'A4.mp3',
    'A5': 'A5.mp3',
    'A6': 'A6.mp3',
    'A7': 'A7.mp3',

    'G#1': 'Ab1.mp3',
    'G#2': 'Ab2.mp3',
    'G#3': 'Ab3.mp3',
    'G#4': 'Ab4.mp3',
    'G#5': 'Ab5.mp3',
    'G#6': 'Ab6.mp3',
    'G#7': 'Ab7.mp3',

    'B0': 'B0.mp3',
    'B1': 'B1.mp3',
    'B2': 'B2.mp3',
    'B3': 'B3.mp3',
    'B4': 'B4.mp3',
    'B5': 'B5.mp3',
    'B6': 'B6.mp3',
    'B7': 'B7.mp3',

    'A#0': 'Bb0.mp3',
    'A#1': 'Bb1.mp3',
    'A#2': 'Bb2.mp3',
    'A#3': 'Bb3.mp3',
    'A#4': 'Bb4.mp3',
    'A#5': 'Bb5.mp3',
    'A#6': 'Bb6.mp3',
    'A#7': 'Bb7.mp3',

    'C1': 'C1.mp3',
    'C2': 'C2.mp3',
    'C3': 'C3.mp3',
    'C4': 'C4.mp3',
    'C5': 'C5.mp3',
    'C6': 'C6.mp3',
    'C7': 'C7.mp3',

    'D1': 'D1.mp3',
    'D2': 'D2.mp3',
    'D3': 'D3.mp3',
    'D4': 'D4.mp3',
    'D5': 'D5.mp3',
    'D6': 'D6.mp3',
    'D7': 'D7.mp3',

    'C#1': 'Db1.mp3',
    'C#2': 'Db2.mp3',
    'C#3': 'Db3.mp3',
    'C#4': 'Db4.mp3',
    'C#5': 'Db5.mp3',
    'C#6': 'Db6.mp3',
    'C#7': 'Db7.mp3',

    'E1': 'E1.mp3',
    'E2': 'E2.mp3',
    'E3': 'E3.mp3',
    'E4': 'E4.mp3',
    'E5': 'E5.mp3',
    'E6': 'E6.mp3',
    'E7': 'E7.mp3',

    'D#1': 'Eb1.mp3',
    'D#2': 'Eb2.mp3',
    'D#3': 'Eb3.mp3',
    'D#4': 'Eb4.mp3',
    'D#5': 'Eb5.mp3',
    'D#6': 'Eb6.mp3',
    'D#7': 'Eb7.mp3',

    'F1': 'F1.mp3',
    'F2': 'F2.mp3',
    'F3': 'F3.mp3',
    'F4': 'F4.mp3',
    'F5': 'F5.mp3',
    'F6': 'F6.mp3',
    'F7': 'F7.mp3',

    'G1': 'G1.mp3',
    'G2': 'G2.mp3',
    'G3': 'G3.mp3',
    'G4': 'G4.mp3',
    'G5': 'G5.mp3',
    'G6': 'G6.mp3',
    'G7': 'G7.mp3',

    'F#1': 'Gb1.mp3',
    'F#2': 'Gb2.mp3',
    'F#3': 'Gb3.mp3',
    'F#4': 'Gb4.mp3',
    'F#5': 'Gb5.mp3',
    'F#6': 'Gb6.mp3',
    'F#7': 'Gb7.mp3',
}, {
    baseUrl: "./assets/samples/flute/"
    }
);

var width = screen.width;
var height = 750;

var bpm = 0;
var midi_bpm = 0;

var svg = d3.select("#Roll")
.append("svg")
.attr("width", "100%")
.attr("height", height)
.attr("style", "outline: thick solid black;")
.style("background-color", '#D3D3D3');

function drawPercussion(time, event, test) {
    if (percussionState != 2) {
        piano.triggerAttackRelease(event.name, event.duration, time, event.velocity);
        
        if (percussionState == 0) {
            Tone.Draw.schedule(function() {
                var elLength = event.duration * midi_bpm;//#: 100 * (event.duration);
                var element = svg.append("g");
                element.attr("transform","translate("+(-1*elLength)+" 0)");
                element.append("rect")
                .attr("width", elLength)
                .attr("height", 8)
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("x", 0)
                .attr("y", (event.midi - 35)*10)
                .attr("fill", "red")
                .attr("opacity", "0.5");

                var t = d3.transition()
                .duration(bpm)
                .ease(d3.easeLinear);

                element.transition(t)
                .attr("transform","translate("+(width+500-elLength)+" 0)")
                .remove();
            }, time);
        }
    }
}

function drawString(time, event) {
    if (stringState != 2) {
        ensemble.triggerAttackRelease(event.name, event.duration, time, event.velocity);

        if (stringState == 0) {
            Tone.Draw.schedule(function() {
                var elLength = event.duration * midi_bpm;//(bpm < 10000)? 200 * (event.duration): 100 * (event.duration);
                var element = svg.append("g");
                element.attr("transform","translate("+(-1*elLength)+" 0)");
                element.append("rect")
                .attr("width", elLength)
                .attr("height", 8)
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("x", 0)
                .attr("y", (event.midi - 35)*10)
                .attr("fill", "green")
                .attr("opacity", "0.5");

                var t = d3.transition()
                .duration(bpm)
                .ease(d3.easeLinear);
                element.transition(t)
                .attr("transform","translate("+(width+500-elLength)+" 0)")
                .remove()
            }, time);
        }
    }
}

function drawBrass(time, event) {
    if (brassState != 2) {
        brass.triggerAttackRelease(event.name, event.duration, time, event.velocity);

        if (brassState == 0) {
            Tone.Draw.schedule(function() {
                var elLength = event.duration * midi_bpm;
                var element = svg.append("g");
                element.attr("transform","translate("+(-1*elLength)+" 0)");
                element.append("rect")
                .attr("width", elLength)
                .attr("height", 8)
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("x", 0)
                .attr("y", (event.midi - 35)*10)
                .attr("fill", "orange")
                .attr("opacity", "0.5");

                var t = d3.transition()
                .duration(bpm)
                .ease(d3.easeLinear);
                
                element.transition(t)
                .attr("transform","translate("+(width+500-elLength)+" 0)")
                .remove()
            }, time);
        }
    }
}

function drawWoodwind(time, event) {
    if (woodwindState != 2) {
        flute.triggerAttackRelease(event.name, event.duration, time, event.velocity);
        
        if (woodwindState == 0) {
            Tone.Draw.schedule(function() {
                var elLength = event.duration * midi_bpm;//(bpm < 10000)? 200 * (event.duration): 100 * (event.duration);
                var vel = 20 * event.velocity;
                var element = svg.append("g");
                element.attr("transform","translate("+(-1*elLength)+" 0)");
                element.append("rect")
                .attr("width", elLength)
                .attr("height", 8)
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("x", 0)
                .attr("y", (event.midi - 35)*10)
                
                .attr("fill", "blue")
                .attr("opacity", "0.5");

                var t = d3.transition()
                .duration(bpm)
                .ease(d3.easeLinear);
                
                element.transition(t)
                .attr("transform","translate("+(width+500-elLength)+" 0)")
                .remove()
            }, time);
        }
    }
}
var playbtn = document.querySelector("#playbtn");
var nextbtn = document.querySelector("#nextbtn");
var prevbtn = document.querySelector("#prevbtn");

var percussionBtn = document.querySelector("#percussionBtn");
var percussionState = 0; // 0: sound+graphic 1: sound 2: none

var stringBtn = document.querySelector("#stringBtn");
var stringState = 0;

var brassBtn = document.querySelector("#brassBtn");
var brassState = 0;

var woodwindBtn = document.querySelector("#woodwindBtn");
var woodwindState = 0;


function toggleButtonState(state, button) {
    if (state == 0) {
        button.classList.remove("activeBtn");
        button.classList.add("semiactiveBtn");
    } else if (state == 1) {
        button.classList.remove("semiactiveBtn");
        button.classList.add("deactiveBtn");
    } else if (state == 2) {
        button.classList.remove("deactiveBtn");
        button.classList.add("activeBtn");
    }
}

percussionBtn.addEventListener("click", function() {
    toggleButtonState(percussionState, percussionBtn);

    percussionState = (percussionState + 1) % 3;
});

stringBtn.addEventListener("click", function() {
    toggleButtonState(stringState, stringBtn);

    stringState = (stringState + 1) % 3;
});

brassBtn.addEventListener("click", function() {
    toggleButtonState(brassState, brassBtn);

    brassState = (brassState + 1) % 3;
});

woodwindBtn.addEventListener("click", function() {
    toggleButtonState(woodwindState, woodwindBtn);

    woodwindState = (woodwindState + 1) % 3;
});

playbtn.addEventListener("click", function(){
    if (Tone.Transport.state === "started"){
        Tone.Transport.pause();
    } else {
        Tone.Transport.start();
    }
});

nextbtn.addEventListener("click", function() {
    Tone.Transport.stop();
    
    d3.selectAll("svg > *").remove();
    playbtn.classList.remove("active");
    nextbtn.classList.remove("active");
    prevbtn.classList.remove("active");

    for (var i = 0; i < percussionParts.length; i++) 
        percussionParts[i].dispose();
    
    percussionParts = [];

    for (var i = 0; i < stringParts.length; i++) 
        stringParts[i].dispose();

    stringParts = [];

    for (var i = 0; i < brassParts.length; i++) 
        brassParts[i].dispose();

    brassParts = [];

    for (var i = 0; i < woodwindParts.length; i++) 
        woodwindParts[i].dispose();

    woodwindParts = [];			

    songIndex = (songIndex + 1) % numOfSongs;
    loadMidi();
});

function loadMidi() {
    MidiConvert.load(midiFiles[songIndex]).then(function(midi) {
        bpm = 1500000 / midi.bpm;
        midi_bpm = midi.bpm;
        Tone.Transport.bpm.value = midi.bpm;
        Tone.Transport.timeSignature = midi.timeSignature;

        Tone.Transport.lookAhead = 0.5;

        // add notes to roll
        for (var i = 0; i < midi.tracks.length; i++) {
            track = midi.tracks[i];
            if (track.instrumentNumber >= 0 && track.instrumentNumber < 25) {
                percussionParts.push(new Tone.Part(drawPercussion, track.notes).start(0));
            } else if (track.instrumentNumber < 49) {
                stringParts.push(new Tone.Part(drawString, track.notes).start(0));
            } else if (track.instrumentNumber < 65) {
                brassParts.push(new Tone.Part(drawBrass, track.notes).start(0));
            } else if (track.instrumentNumber < 81) {
                woodwindParts.push(new Tone.Part(drawWoodwind, track.notes).start(0));
            }
        }
        
        document.querySelector("#song").innerHTML = songNames[songIndex];
        document.querySelector("#composer").innerHTML = composers[songIndex];

        playbtn.classList.add("active");
        nextbtn.classList.add("active");
        prevbtn.classList.add("active");
        
    });
}

document.addEventListener("DOMContentLoaded", function() {	
    
    piano.release = .5;
    piano.toMaster();

    ensemble.release = 0.2;
    ensemble.toMaster();

    flute.release = 0.2;
    flute.toMaster();

    brass.release = 0.2;
    brass.toMaster();

    loadMidi();
});