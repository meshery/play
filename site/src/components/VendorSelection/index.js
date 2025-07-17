import Button from "../../reusecore/Button";
import ArrowIcon from "../../ArrowIcon";
import {
  VendorSelectionWrapper,
  VendorCard,
  AddYourOwnCard,
} from "./vendorSelection.style";

const VendorSelection = () => {
  const vendors = [
    {
      name: "Layer5",
      description: "Meshery Playground provided by Layer5",
      url: "https://playground.meshery.io",
      logo: null, // We can add logos later
      available: true,
    },
  ];

  return (
    <VendorSelectionWrapper>
      <h2>Choose Your Playground Vendor</h2>
      <div className="vendors-grid">
        {vendors.map((vendor, index) => (
          <VendorCard key={vendor.name} available={vendor.available}>
            <div className="vendor-info">
              <h3>{vendor.name}</h3>
              <p>{vendor.description}</p>
            </div>
            <div className="vendor-action">
              {vendor.available ? (
                <a href={vendor.url} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="vendor-btn"
                    style={{ background: "rgb(235, 192, 23)" }}
                  >
                    <ArrowIcon />
                    Launch Playground
                  </Button>
                </a>
              ) : (
                <Button className="vendor-btn disabled" disabled>
                  Coming Soon
                </Button>
              )}
            </div>
          </VendorCard>
        ))}

        <AddYourOwnCard>
          <div className="add-your-own-content">
            <h3>Custom</h3>
            <p>Bring your own vendor-hosted Meshery Playground</p>
            <a
              href="https://docs.meshery.io/extensibility/providers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="add-btn">+ Add Your Own Vendor</Button>
            </a>
          </div>
        </AddYourOwnCard>
      </div>
    </VendorSelectionWrapper>
  );
};

export default VendorSelection;
