import React from 'react';

const NumberedList = ({ items, numberColor }) => (
  <ol style={{ listStyle: 'none', padding: 0, margin: 0, counterReset: 'my-counter' }}>
    {items.map((item, index) => (
      <li
        key={index}
        style={{
          counterIncrement: 'my-counter',
          marginBottom: '6px',
          color: '#475569',
          lineHeight: '1.3',
          position: 'relative',
          paddingLeft: '32px',
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: '0.1em',
            width: '20px',
            height: '20px',
            backgroundColor: numberColor,
            color: '#FFFFFF',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          {index + 1}
        </span>
        {item}
      </li>
    ))}
  </ol>
);

const InfoCard = ({ title, icon, items, numberColor }) => (
  <div
    style={{
      background: '#ffffff',
      padding: '24px',
      borderRadius: '16px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      width: '320px',
      height: '280px',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}
  >
    <div style={{ textAlign: 'center', marginBottom: '8px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '12px',
          fontSize: '48px',
        }}
      >
        {icon}
      </div>
      <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>{title}</h3>
    </div>
    <NumberedList items={items} numberColor={numberColor} />
  </div>
);

const WhoSection = () => (
  <section style={{ padding: '76px 48px', textAlign: 'center', background: '#ffffff', marginBottom: '20px' }}>
    <h2 style={{ marginBottom: '16px' }}>Who it’s for</h2>
    <p style={{ fontSize: '18px', color: '#475569', marginBottom: '40px' }}>
      Connecting people with local opportunities.
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', alignItems: 'stretch' }}>
      <InfoCard
        title="For Job Seekers"
        icon="👤"
        items={[
          'Find part-time jobs nearby',
          'Work hours that fit your life',
          'Build experience and earn money',
        ]}
        numberColor="#F97316"
      />
      <InfoCard
        title="For Employers"
        icon="💼"
        items={[
          'Hire reliable local workers',
          'Fill shifts quickly and easily',
          'Reduce hiring costs and time',
        ]}
        numberColor="#2563EB"
      />
    </div>
  </section>
);

export default WhoSection;