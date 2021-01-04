const createMXLM = chord => {
    const chordMXLM = getChordMXLM(chord.notes)
	const MXLM_TEMPLATE = `
                        <?xml version="1.0" encoding="UTF-8"?>
                        <!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
                        <score-partwise version="3.1">
                        <part-list>
                            <score-part id="P1">
                            <part-name>Music</part-name>
                            </score-part>
                        </part-list>
                        <part id="P1">
                            <measure number="1" width="223.33">
                            <attributes>
                                <divisions>1</divisions>
                                <key>
                                <fifths>0</fifths>
                                </key>
                                <clef>
                                <sign>G</sign>
                                <line>2</line>
                                </clef>
                            </attributes>

                            ${chordMXLM} 
                            
                            </measure>
                        </part>
                        </score-partwise>

                        `
}

const getChordMXLM = (notes) => {
    notes.map(n => {

        return `
            <note>
                <chord/>
                <pitch>
                <alter>${alteration}</alter>
                <step>${n}</step>
                <octave>4</octave>
                </pitch>
                <duration>4</duration>
                <voice>1</voice>
                <type>whole</type>
            </note>
        `
    })
}