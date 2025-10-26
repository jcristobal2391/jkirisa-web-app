import SinglePagePDFViewer from 'src/components/PDF/single-page'

const witchPDF = '/stories/witches.pdf'

export const AshenOption2 = () => {
    return (
        <div className="main-body-section">
            <div className="container">
                <div className="block-title">
                    <h2>Stories from Ashen - The Witch War</h2>
                </div>
                <div className="feature-content">
                    <p>
                        The Witch is the second, chonologically, but perhaps
                        not the second to be read. Set 1000 years before the story 
                        proper, and 1000 years after the events of the Sword Saint, 
                        it follows a young Witch as her eldest sister threatens to 
                        bring wrath and ruin to the land.
                    </p>
                    <p>
                        Nettle is the youngest witch of her cabal, forced to grow up 
                        all too soon as her eldest sister betrayed her family. There 
                        will be found family, some new faces, some old, magic, and 
                        wonder
                    </p>
                    <h4>The Witch War</h4>
                    <SinglePagePDFViewer pdf={witchPDF} />
                </div>
            </div>
        </div>
    )
}