<!DOCTYPE html>
<html>

<head>
  <style>
    .container {
      display: flex;
      flex-wrap: wrap;
    }
    .section {
      width: 50%;
    }
    .section-btn {
      background: #F4F4F4;
      width: Hug (111px)px;
      height: Hug (32px)px;
      padding: 4px 12px 4px 12px;
      border-radius: 1em;
      opacity: 0px;
    }
    .container-hr {
      height: 0px;
      border: 3px solid #F4F4F4;
    }
    .fetures-supported-container {}
    .feture-supported-table {}
    .feture-supported-table-header {
      background: #EBEBEB;
      color: #000000;
    }
    .feture-supported-table td,
    th {
      border: 1px solid #000000;
    }
    .container-setup-guide{
        margin-top: 5em;
    }
    h1,h2,h3 {
         border-bottom: none;
    }
    .tab {
        overflow: hidden;
    }
    .tab button {
        background-color: inherit;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        font-size: 17px;
    }
    .tab button:hover {
        background-color: #ddd;
    }
    .tab button.active {
        background-color: #ccc;
    }
    .tabcontent {
        display: none;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
    }
  </style>
</head>
<body>
  <h3 style="color: orange;">INTRODUCTION</h3>

  <div class="container">
    <div class="section">
      <h2> Welcome to CAIRA </h2>
      CAIRA aims to provide a comprehensive framework for building secure and scalable
      AI solutions using Azure services. Access Github
      <a href="https://github.com/vishal151092/"> CAIRA repo</a> For a quyick setup,
      go to <a href="#getStarted-top"> Get Started </a> section
    </div>
    <div class="section">
      <h2> CAIRA Users and Benefits </h2>
      <ul>
        <li>Data Scientist: Quick setup for experiments.</li>
        <li>Software Engineer: Easy provisioning with pre-configured copmponents.</li>
        <li>Platform Engineer: Simplified CI/CD configurations.</li>
        <li>Security Lead: Faster security reviews.</li>
      </ul>
    </div>
    <div class="section">
      <h2> Reference architectures - supports </h2>
      <span> Reference Architecture - A set of Azure components designed to meet
        specific customer use cases while adhering to security best practices.</span>
      <ul>
        <li><a>The Secure AML Reference Implementation </a></li>
        <li><a>The Secure AML RAG Reference Implementation </a></li>
      </ul>
    </div>
    <div class="section">
      <h2> Use cases - supports </h2>
      <div class="container">
        <button class="section-btn"> Chat with Data </button>
        <button class="section-btn"> Annotate Data </button>
        <button class="section-btn"> Summarize Data </button>
        <button class="section-btn"> Data Scientist Experimentation </button>
        <button class="section-btn"> Chat with APIs Generate </button>
        <button class="section-btn"> Generate Code </button>
        <button class="section-btn"> Expert co-author </button>
      </div>
    </div>

  </div>

  <hr class="container-hr" />

  <h3 style="color: orange;">FEATURES SUPPORTED</h3>

  <div class="fetures-supported-container">
    <table class="feture-supported-table">
      <tr class="feture-supported-table-header">
        <th>Feature(below features are sample data placeholder)</th>
        <th>ISE-Internal</th>
        <th>Customer Tenant</th>
      </tr>
      <tr>
        <td>Provisioning AI Workspaces</td>
        <td>&#x2713;</td>
        <td>&#x2713;</td>
      </tr>
      <tr>
        <td>Managed VNET Support</td>
        <td>&#x2713;</td>
        <td>&#x2713;</td>
      </tr>
      <tr>
        <td>Observability and Logging</td>
        <td>&#x2713;</td>
        <td>&#x2713;</td>
      </tr>
      <tr>
        <td>CI/CD Pipeline Integration</td>
        <td>&#x2713;</td>
        <td>&#x2713;</td>
      </tr>
      <tr>
        <td>Customer Data Handling</td>
        <td>&#x2713;</td>
        <td>&#x2713;</td>
      </tr>
    </table>
  </div>

  <hr class="container-hr" />

  <h3 style="color: orange;">SETUP GUIDE</h3>
  <div class="container-setup-guide">
    <img src="image-setup-guide.svg" alt="setup guide flowchart illustration "/>
  </div>

<h3 style="color: orange;">ARCHITECTURE FLOW</h3>
<h2>Data Scientist - Data Pipeline and Model Deployment for Data Scientists(the flow chart is placeholder)</h2>
  <div class="container-setup-guide">
    <img src="image-architecture-flow.svg" alt="Architecture flowchart illustration "/>
  </div>

<hr class="container-hr" />

<h3 style="color: orange;">SAMPLE TABS</h3>

<!-- <div  class="container-setup-guide">
    <div class="tab">
        <button class="tablinks" onclick="showContent(event, 'London')">London</button>
        <button class="tablinks" onclick="showContent(event, 'Paris')">Paris</button>
        <button class="tablinks" onclick="showContent(event, 'Tokyo')">Tokyo</button>
    </div>

<div id="London" class="tabcontent">
  <h3>London</h3>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" class="tabcontent">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p> 
</div>

<div id="Tokyo" class="tabcontent">
  <h3>Tokyo</h3>
  <p>Tokyo is the capital of Japan.</p>
</div>


</div> -->

</body>

</html>
