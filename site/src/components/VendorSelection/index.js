import Button from "../../reusecore/Button";
import ArrowIcon from "../../ArrowIcon";
import {
  VendorSelectionWrapper,
  VendorCard,
  AddYourOwnCard,
} from "./vendorSelection.style";

// Meshery Extension Point
// This component serves as a point of extension for adding new playground providers.
// Add your provider by including it in the vendors array below.
const VendorSelection = () => {
  const vendors = [
    {
      name: "DigitalOcean",
      description: "Meshery Playground hosted by DigitalOcean",
      url: "https://do.playground.meshery.io",
      logo: null, // We can add logos later
      available: false,
      hosting: "hosted",
    },
    {
      name: "ID10",
      description: "Meshery Playground hosted by ID10",
      url: "https://id10.playground.meshery.io",
      logo: null, // We can add logos later
      available: false,
      hosting: "hosted",
    },
    {
      name: "Layer5",
      description: "Meshery Playground hosted by Layer5",
      url: "https://playground.meshery.io",
      logo: null, // We can add logos later
      available: true,
      hosting: "hosted",
    },
    {
      name: "AWS",
      description: "Host your own Meshery Playground on AWS EKS",
      url: "https://docs.meshery.io/installation/kubernetes/eks",
      logo: null, // We can add logos later
      available: true,
      hosting: "self-hosted",
    },
    {
      name: "GCP",
      description:
        "Host your own Meshery Playground on Google Cloud Platform (GKE)",
      url: "https://docs.meshery.io/installation/kubernetes/gke",
      logo: null, // We can add logos later
      available: true,
      hosting: "self-hosted",
    },
    {
      name: "Azure",
      description:
        "Host your own Meshery Playground on Microsoft Azure",
      url: "https://docs.meshery.io/installation/kubernetes/aks",
      logo: null, // We can add logos later
      available: true,
      hosting: "self-hosted",
    },
  ];

  return (
    <VendorSelectionWrapper>
      <div>
        <h2 style={{ marginTop: "3rem" }}>Hosted Playgrounds</h2>
        <div className="vendors-grid">
          {vendors.map((vendor, index) => (
            
              vendor.hosting === "hosted" && (
                <div>
                <VendorCard key={vendor.name} available={vendor.available}>
                  <div className="vendor-info">
                    <p>{vendor.description}</p>
                  </div>
                  <div className="vendor-action">
                    {vendor.available ? (
                      <a
                        href={vendor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className={
                            vendor.hosting === "hosted"
                              ? "vendor-btn hosted"
                              : "vendor-btn self-hosted"
                          }
                        >
                          <ArrowIcon />
                          {vendor.hosting === "hosted"
                            ? "Launch Playground"
                            : "Install Playground"}
                        </Button>
                      </a>
                    ) : (
                      <Button className="vendor-btn disabled" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </VendorCard>
                </div>
              )
          
          ))}
        </div>

        <h2 style={{ marginTop: "3rem" }}>Self-Hosted Playgrounds</h2>
        <div className="vendors-grid">
          {vendors.map((vendor, index) => (
            
              vendor.hosting === "self-hosted" && (
                <div>
                <VendorCard key={vendor.name} available={vendor.available}>
                  <div className="vendor-info">
                    <p>{vendor.description}</p>
                  </div>
                  <div className="vendor-action">
                    {vendor.available ? (
                      <a
                        href={vendor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className={
                            vendor.hosting === "hosted"
                              ? "vendor-btn hosted"
                              : "vendor-btn self-hosted"
                          }
                        >
                          <ArrowIcon />
                          {vendor.hosting === "hosted"
                            ? "Launch Playground"
                            : "Install Playground"}
                        </Button>
                      </a>
                    ) : (
                      <Button className="vendor-btn disabled" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </VendorCard>
                </div>
              )
            
          ))}
          <AddYourOwnCard style={{marginTop: "3rem"}}>
            <div className="add-your-own-content">
              {/* <h3>Other</h3> */}
              <p>
                <i>Have a provider to list?</i>
              </p>
              <a
                href="https://docs.meshery.io/extensibility/providers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="add-btn">+ Add your Playground here</Button>
              </a>
            </div>
          </AddYourOwnCard>
        </div>
      </div>
    </VendorSelectionWrapper>
  );
};

export default VendorSelection;
